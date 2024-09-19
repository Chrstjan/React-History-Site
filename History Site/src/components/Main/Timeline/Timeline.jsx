import style from "./Timeline.module.scss";

export const Timeline = ({children, points}) => {
    return (
            <article className={style.timelineStyling}>
                <div className={style.lineContainer}>
                    <span className={style.circleStyling}></span>
                    {/*Stregen vil ikke gå ned til bunden >:/  */}
                    <div className={style.timelineContainer}>
                        <span className={style.lineStyling}></span>
                    </div>
                </div>
                {children}
            </article>
    )
}