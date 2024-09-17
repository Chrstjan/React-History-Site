import { Header } from "../components/Header/Header"
import { HeaderBoard } from "../components/Header/HeaderBoard/HeaderBoard"
import { DateWrapper } from "../components/Main/DateWrapper/DateWrapper"
import { Icon } from "../components/Main/Icon/Icon"
import { Navigation } from "../components/Navigation/Navigation"

export const ByDatePage = () => {
    return (
        <>
            <Header>
                <HeaderBoard headerText="On" date="22/08" subText="What happened on this day - Here you can enter a specific date to get only events that happened on this date"/>
            </Header>
            <Navigation />
            <DateWrapper>
                <Icon icon="./src/assets/images/Light.svg"/>
            </DateWrapper>
        </>
    )
}