import { Header } from "../components/Header/Header"
import { HeaderBoard } from "../components/Header/HeaderBoard/HeaderBoard"

export const SincePage = () => {
    return (
        <>
            <Header>
                <HeaderBoard headerText="Since" date="1947" subText="What happened on this day - Here you can enter a specific year to get only events for that year"/>
            </Header>
            <h2>Since</h2>
        </>
    )
}