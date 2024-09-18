import { useEffect } from "react"
import { useFetch } from "../hooks/useFetch"
import { Header } from "../components/Header/Header"
import { HeaderBoard } from "../components/Header/HeaderBoard/HeaderBoard"
import { Navigation } from "../components/Navigation/Navigation"
import { DateWrapper } from "../components/Main/DateWrapper/DateWrapper"
import { Icon } from "../components/Main/Icon/Icon"
import { Timeline } from "../components/Main/Timeline/Timeline"
import { TimelineEvent } from "../components/Main/Timeline/Event/TimelineEvent"

export const TodayPage = () => {
    let today = new Date();
    let month = String(today.getMonth() + 1).padStart(2,'0');
    let day = String(today.getDate()).padStart(2,'0');
    const { data } = useFetch(`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`); 
                               //https://history.muffinlabs.com/date

    useEffect(() => {
        //data.data.Events
        {data ? console.log(data): null}
    }, [data])
    
    return (
        <>
            <Header>
                <HeaderBoard headerText="On This Day" subText="What happened on this day - historical events, deaths and births thoughout time"/>
            </Header>
            <Navigation />
            <DateWrapper>
                <Icon icon="./src/assets/images/Light.svg" type="lightbulb"/>
                {data ? 
                 <Timeline points={data.events}>
                    <TimelineEvent data={data.events}/>
                 </Timeline> 
                 : <h2>Loading...</h2>}
            </DateWrapper>
        </>
    )
}