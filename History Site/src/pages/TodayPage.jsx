import { Header } from "../components/Header/Header"
import { HeaderBoard } from "../components/Header/HeaderBoard/HeaderBoard"

export const TodayPage = () => {
    return (
        <>
            <Header>
                <HeaderBoard headerText="On This Day" subText="What happened on this day - historical events, deaths and births thoughout time"/>
            </Header>
            <h2>Today</h2>
        </>
    )
}