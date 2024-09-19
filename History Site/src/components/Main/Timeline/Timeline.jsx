import style from "./Timeline.module.scss";

export const Timeline = ({children, points}) => {
    return (
            <article className={style.timelineStyling}>
                <div className={style.lineContainer}>
                    <span className={style.circleStyling}></span>
                    <span className={style.lineStyling}></span>
                    <div className={style.timepointStyling}>
                        {points.map((point, index) => {
                            return (
                                  <div key={index} className={style.pointContainer}>
                                    <span className={style.pointLineStyling}></span>
                                    <span className={style.pointStyling}></span>
                                  </div>
                            )
                        })}
                    </div>
                </div>
                {children}
            </article>
    )
}