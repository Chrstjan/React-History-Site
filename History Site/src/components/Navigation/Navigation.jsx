import { NavLink } from "react-router-dom";
import style from "./Navigation.module.scss";

export const Navigation = () => {
    return (
        <nav>
            <ul className={style.NavigationStyling}>
                <li>
                    <NavLink style={({isActive}) => isActive ? {textDecoration: "underline", color: "#ffe9bf"} : {color: "#c7bd8d"}} to={"/by-date"}>By Date</NavLink>
                </li>
                <li>
                    <NavLink style={({isActive}) => isActive ? {textDecoration: "underline", color: "#ffe9bf"} : {color: "#c7bd8d"}} to={"/"}>Today</NavLink>
                </li>
                <li>
                    <NavLink style={({isActive}) => isActive ? {textDecoration: "underline", color: "#ffe9bf"} : {color: "#c7bd8d"}} to={"/since"}>Since</NavLink>
                </li>
            </ul>
        </nav>
    )
}