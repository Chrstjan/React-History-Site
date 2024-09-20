import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { useQuery } from "@tanstack/react-query"
import { Header } from "../components/Header/Header"
import { HeaderBoard } from "../components/Header/HeaderBoard/HeaderBoard"
import { Navigation } from "../components/Navigation/Navigation"
import { DateWrapper } from "../components/Main/DateWrapper/DateWrapper"
import { Icon } from "../components/Main/Icon/Icon"
import { Timeline } from "../components/Main/Timeline/Timeline"
import { TimelineEvent } from "../components/Main/Timeline/Event/TimelineEvent"
import { Modal } from "../components/Modal/Modal"

export const ByDatePage = () => {
    const {isDarkMode} = useContext(ThemeContext);
    const [modalOpen, setModalOpen] = useState(false);

    //Laver en state til at styre hvor mange events der bliver vidst af gangen
    const [visibleEvents, setVisibleEvents] = useState(10);

    const [month, setMonth] = useState("08");
    const [day, setDay] = useState("28");

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

    //Lavet et tomt array til at komme de sorteret objects ind i
    let sortedEvents = [];
    if (data) {
        //Laver en kopi af data.events og modificere kopien med en .sort til at tage de laveste tal først
        //Og sætter det tomme array til at være den nye modificeret kopi
        sortedEvents = [...data.events].sort((a, b) => a.year - b.year);
    }

    //Funktion til at tilføje flere events når burger scroller ned til bunden
    const loadMoreEvents = () => {
        console.log("Bottom pit!");
        //Tilføjer 10 mere til VisibleEvents så der kommer 10 events mere frem
        setVisibleEvents(prev => prev + 10);
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            //Checker om brugeren er i bunden af siden. Når brugeren er i bunden køre loadMoreEvents funktionen
            if (windowHeight + scrollPosition >= documentHeight) {
                // console.log("Bottom Pit!");
                loadMoreEvents();
            }

        }

        window.addEventListener("scroll", handleScroll);

        return () => { 
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])
    
    return (
        <>
            <Header>
                <HeaderBoard headerText="On" isDarkMode={isDarkMode} action={handleModal} date={month !== "" ? `${day}/${month}` : "22/08" } subText="What happened on this day - Here you can enter a specific date to get only events that happened on this date"/>
            </Header>
            <Navigation isDarkMode={isDarkMode}/>
            {modalOpen ? <Modal modalOpen={setModalOpen} month={setMonth} day={setDay} headerText="Get Event by date" dateText="Must follow month/day format (02/14)"/> : null}
            <DateWrapper>
                <Icon icon="./src/assets/images/Light.svg" type="lightbulb" isDarkMode={isDarkMode}/>
                {data.type !== "server_error#empty_response" ? 
                    <Timeline isDarkMode={isDarkMode}>
                        <TimelineEvent data={sortedEvents.slice(0, visibleEvents)} isDarkMode={isDarkMode}/>
                    </Timeline> 
                : null}
            </DateWrapper>
        </>
    )
}