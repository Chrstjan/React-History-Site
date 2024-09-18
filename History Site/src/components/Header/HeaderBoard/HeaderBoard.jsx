import style from "./HeaderBoard.module.scss";

export const HeaderBoard = ({headerText, action, date, subText, isDarkMode}) => {
    return (
            <div className={`${style.boardStyling} ${isDarkMode ? style.darkMode : style.lightMode}`}>
                <header>
                    <span className={style.selectStyling}>
                        <h2>{headerText}</h2>
                        {date ? <button onClick={() => action()} className={style.buttonStyling}>{date}</button> : null}
                    </span>
                    <p>{subText}</p>
                </header>
            </div>
    )
}