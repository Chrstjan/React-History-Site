import { Outlet } from "react-router-dom"
import { Main } from "../components/Main/Main"
import { Wrapper } from "../components/Wrapper/Wrapper"

export const MainLayout = () => {
    return (
        <>
            <Wrapper>
                <Main>
                    <Outlet />
                </Main>
            </Wrapper>
        </>
    )
}