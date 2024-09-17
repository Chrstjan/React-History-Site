import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext";
import { Outlet } from "react-router-dom"
import { Main } from "../components/Main/Main"
import { Wrapper } from "../components/Wrapper/Wrapper"
import { Header } from "../components/Header/Header";
import { HeaderBoard } from "../components/Header/HeaderBoard/HeaderBoard";

export const MainLayout = () => {
    const {isDarkMode } = useContext(ThemeContext)
    return (
        <>
            <Wrapper isDarkMode={isDarkMode}>
                <Main>
                    <Outlet />
                </Main>
            </Wrapper>
        </>
    )
}