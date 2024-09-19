import style from "./EventPoint.module.scss";

export const EventPoint = () => {
    return (
        <div className={style.eventPoint}>
            <span className={style.lineStyling}></span>
            <span className={style.pointStyling}></span>
        </div>
    )
}