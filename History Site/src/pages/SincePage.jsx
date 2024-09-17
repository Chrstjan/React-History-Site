import { Header } from "../components/Header/Header"
import { HeaderBoard } from "../components/Header/HeaderBoard/HeaderBoard"
import { DateWrapper } from "../components/Main/DateWrapper/DateWrapper"
import { Icon } from "../components/Main/Icon/Icon"
import { Navigation } from "../components/Navigation/Navigation"

export const SincePage = () => {
    return (
        <>
            <Header>
                <HeaderBoard headerText="Since" date="1947" subText="What happened on this day - Here you can enter a specific year to get only events for that year"/>
            </Header>
            <Navigation />
            <DateWrapper>
                <Icon icon="./src/assets/images/Light.svg"/>
            </DateWrapper>
        </>
    )
}