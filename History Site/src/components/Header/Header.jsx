import style from "./Header.module.scss";

export const Header = ({children}) => {
    return (
        <header className={style.headerStyling}>{children}</header>
    )
}