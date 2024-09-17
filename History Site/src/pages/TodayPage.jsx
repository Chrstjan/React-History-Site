import { Header } from "../components/Header/Header"
import { HeaderBoard } from "../components/Header/HeaderBoard/HeaderBoard"
import { Navigation } from "../components/Navigation/Navigation"
import { DateWrapper } from "../components/Main/DateWrapper/DateWrapper"
import { Icon } from "../components/Main/Icon/Icon"

export const TodayPage = () => {
    return (
        <>
            <Header>
                <HeaderBoard headerText="On This Day" subText="What happened on this day - historical events, deaths and births thoughout time"/>
            </Header>
            <Navigation />
            <DateWrapper>
                <Icon icon="./src/assets/images/Light.svg"/>
            </DateWrapper>
        </>
    )
}