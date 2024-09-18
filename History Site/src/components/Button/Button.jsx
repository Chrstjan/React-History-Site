import style from "./Button.module.scss";

export const Button = ({action, text, isDarkMode}) => {
    return (
        <button className={`${style.buttonStyling} ${isDarkMode ? null : style.lightMode}`} onClick={() => action()}>{text}</button>
    )
}