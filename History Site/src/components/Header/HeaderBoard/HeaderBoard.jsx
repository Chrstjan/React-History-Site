import style from "./HeaderBoard.module.scss";

export const HeaderBoard = ({headerText, action, date, subText, isDarkMode}) => {
    return (
            <div className={`${style.boardStyling} ${isDarkMode ? style.darkMode : style.lightMode}`}>
                <div className={`${style.dotsContainer} ${isDarkMode  ? null: style.lightMode}`}>
                 <div className={style.leftStyling}>
                    <span className={style.dotStyling}></span>
                    <span className={style.dotStyling}></span>
                 </div>
                 <div className={style.rightStyling}>
                    <span className={style.dotStyling}></span>
                    <span className={style.dotStyling}></span>
                 </div>
                </div>
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