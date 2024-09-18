import { useContext, useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { Header } from "../components/Header/Header"
import { HeaderBoard } from "../components/Header/HeaderBoard/HeaderBoard"
import { DateWrapper } from "../components/Main/DateWrapper/DateWrapper"
import { Icon } from "../components/Main/Icon/Icon"
import { Navigation } from "../components/Navigation/Navigation"
import { Timeline } from "../components/Main/Timeline/Timeline"
import { TimelineEvent } from "../components/Main/Timeline/Event/TimelineEvent"
import { Modal } from "../components/Modal/Modal"
import { ThemeContext } from "../context/ThemeContext"
import { BackToTop } from "../components/BackToTop/BackToTop"

export const ByDatePage = () => {
    const {isDarkMode} = useContext(ThemeContext);
    const [modalOpen, setModalOpen] = useState(false);

    const [month, setMonth] = useState("");
    const [day, setDay] = useState("");

    const handleModal = () => {
        setModalOpen(prev => !prev);
    }

    useEffect(() => {
        console.log(month);
        console.log(day);
    }, [month, day])

    //const queryClient = useQueryClient();

    const { isPending, error, data } = useQuery({
        queryKey: ["history by date", month, day],
        queryFn: async () => {
            const res = await fetch(`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`);
            const data = await res.json();
            return data;
        },
        staleTime: 1000 * 600
    });
    console.log(data);

    if (isPending) {
        return <h2>Loading...</h2>;
    }
    
    return (
        <>
            <Header>
                <HeaderBoard headerText="On" isDarkMode={isDarkMode} action={handleModal} date={month !== "" ? `${day}/${month}` : "22/08" } subText="What happened on this day - Here you can enter a specific date to get only events that happened on this date"/>
            </Header>
            <Navigation isDarkMode={isDarkMode}/>
            <BackToTop />
            {modalOpen ? <Modal modalOpen={setModalOpen} month={setMonth} day={setDay} headerText="Get Event by date" dateText="Must follow month/day format (02/14)"/> : null}
            <DateWrapper>
                <Icon icon="./src/assets/images/Light.svg" type="lightbulb" isDarkMode={isDarkMode}/>
                {data.type !== "server_error#empty_response" ? 
                    <Timeline points={data.events}>
                        <TimelineEvent data={data.events} isDarkMode={isDarkMode}/>
                    </Timeline> 
                : null}
            </DateWrapper>
        </>
    )
}