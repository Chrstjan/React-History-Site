import { NavLink } from "react-router-dom";
import style from "./Navigation.module.scss";

export const Navigation = ({isDarkMode}) => {
    return (
        <nav className={`${style.navStyling} ${isDarkMode ? null : style.lightMode}`}>
            <ul className={`${style.NavigationStyling} ${isDarkMode ? null : style.lightMode}`}>
                <li>
                    <NavLink className={({isActive}) => isActive ? style.activeLink : style.navLink} to={"/by-date"}>By Date</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? style.activeLink : style.navLink} to={"/"}>Today</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? style.activeLink : style.navLink} to={"/since"}>Since</NavLink>
                </li>
            </ul>
        </nav>
    )
}