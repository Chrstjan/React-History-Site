import style from "./Main.module.scss";

export const Main = ({children}) => {
    return (
        <main className={style.mainStyling}>{children}</main>
    )
}