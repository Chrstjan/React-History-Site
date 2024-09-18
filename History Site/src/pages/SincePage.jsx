import { useContext } from "react"
import { Header } from "../components/Header/Header"
import { HeaderBoard } from "../components/Header/HeaderBoard/HeaderBoard"
import { DateWrapper } from "../components/Main/DateWrapper/DateWrapper"
import { Icon } from "../components/Main/Icon/Icon"
import { Navigation } from "../components/Navigation/Navigation"
import { ThemeContext } from "../context/ThemeContext"

export const SincePage = () => {
    const {isDarkMode} = useContext(ThemeContext);
    return (
        <>
            <Header>
                <HeaderBoard headerText="Since" isDarkMode={isDarkMode} date="1947" subText="What happened on this day - Here you can enter a specific year to get only events for that year"/>
            </Header>
            <Navigation isDarkMode={isDarkMode}/>
            <DateWrapper>
                <Icon icon="./src/assets/images/Light.svg" type="lightbulb" isDarkMode={isDarkMode}/>
            </DateWrapper>
        </>
    )
}