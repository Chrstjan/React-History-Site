import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext";
import { Outlet } from "react-router-dom"
import { Wrapper } from "../components/Wrapper/Wrapper"
import { Main } from "../components/Main/Main"
import { BackToTop } from "../components/BackToTop/BackToTop";

export const MainLayout = () => {
    const {isDarkMode } = useContext(ThemeContext)
    return (
        <>
            <Wrapper isDarkMode={isDarkMode}>
                <Main>
                    <Outlet />
                    <BackToTop isDarkMode={isDarkMode}/>
                </Main>
            </Wrapper>
        </>
    )
}