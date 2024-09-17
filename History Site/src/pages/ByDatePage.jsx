import { Header } from "../components/Header/Header"
import { HeaderBoard } from "../components/Header/HeaderBoard/HeaderBoard"

export const ByDatePage = () => {
    return (
        <>
            <Header>
                <HeaderBoard headerText="On" date="22/08" subText="What happened on this day - Here you can enter a specific date to get only events that happened on this date"/>
            </Header>
            <h2>By Date</h2>
        </>
    )
}