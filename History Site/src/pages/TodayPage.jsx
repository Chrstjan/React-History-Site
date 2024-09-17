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
    const { data } = useFetch("https://history.muffinlabs.com/date");

    useEffect(() => {
        {data ? console.log(data): null}
    }, [])

    return (
        <>
            <Header>
                <HeaderBoard headerText="On This Day" subText="What happened on this day - historical events, deaths and births thoughout time"/>
            </Header>
            <Navigation />
            <DateWrapper>
                <Icon icon="./src/assets/images/Light.svg" type="lightbulb"/>
                <Timeline>
                    <TimelineEvent />
                </Timeline>
            </DateWrapper>
        </>
    )
}