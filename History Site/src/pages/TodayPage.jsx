import { useContext, useEffect } from "react"
import { Header } from "../components/Header/Header"
import { HeaderBoard } from "../components/Header/HeaderBoard/HeaderBoard"
import { Navigation } from "../components/Navigation/Navigation"
import { DateWrapper } from "../components/Main/DateWrapper/DateWrapper"
import { Icon } from "../components/Main/Icon/Icon"
import { Timeline } from "../components/Main/Timeline/Timeline"
import { TimelineEvent } from "../components/Main/Timeline/Event/TimelineEvent"
import { ThemeContext } from "../context/ThemeContext"
import { useQuery } from "@tanstack/react-query"

export const TodayPage = () => {
    const {isDarkMode} = useContext(ThemeContext);
    let today = new Date();
    let month = String(today.getMonth() + 1).padStart(2,'0');
    let day = String(today.getDate()).padStart(2,'0');

    const { isPending, error, data } = useQuery({
        queryKey: ["Getting data for today"],
        queryFn: async () => {
            const res = await fetch(`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`)
            const data = await res.json();
            return data;
        },
        staleTime: 1000 * 600
    });
                               //https://history.muffinlabs.com/date

    useEffect(() => {
        //data.data.Events
        {data ? console.log(data): null}
    }, [data])
    
    return (
        <>
            <Header>
                <HeaderBoard headerText="On This Day" isDarkMode={isDarkMode} subText="What happened on this day - historical events, deaths and births thoughout time"/>
            </Header>
            <Navigation isDarkMode={isDarkMode}/>
            <DateWrapper>
                <Icon icon="./src/assets/images/Light.svg" type="lightbulb" isDarkMode={isDarkMode}/>
                {data ? 
                 <Timeline points={data.events}>
                    <TimelineEvent data={data.events} isDarkMode={isDarkMode}/>
                 </Timeline> 
                 : <h2>Loading...</h2>}
            </DateWrapper>
        </>
    )
}