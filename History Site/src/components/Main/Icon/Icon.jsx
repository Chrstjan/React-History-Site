import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import style from "./Icon.module.scss";

export const Icon = ({icon, type, text, isDarkMode}) => {
    const { changeTheme } = useContext(ThemeContext)

    return (
            <span className={`${style.iconStyling} ${style[type]} ${isDarkMode ? null : style.lightMode}`}>
                <img onClick={() => changeTheme()} src={icon} alt="Icon Logo"/>
                {text ? <p>{text}</p>: null}
            </span>
    )
}