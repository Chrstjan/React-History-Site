import style from "./Timeline.module.scss";

export const Timeline = ({children, isDarkMode}) => {
    return (
            <article className={style.timelineStyling}>
                <div className={`${style.lineContainer} ${isDarkMode ? null : style.lightMode}`}>
                    <span className={style.circleStyling}></span>
                    {/*Stregen vil ikke gå ned til bunden >:/  */}
                    <span className={style.lineStyling}></span>
                </div>
                {children}
            </article>
    )
}