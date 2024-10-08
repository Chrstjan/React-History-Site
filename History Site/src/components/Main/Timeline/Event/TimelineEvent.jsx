import { Icon } from "../../Icon/Icon";
import { EventPoint } from "../EventPoint/EventPoint";
import style from "./TimelineEvent.module.scss";

export const TimelineEvent = ({data, isDarkMode}) => {
    return (
            <div className={`${style.eventStyling}`}>
                {data.map((item, index) => {
                    return (
                            <section key={index} className={`${style.eventContainer} ${isDarkMode ? null : style.lightMode}`}>
                             <div className={`${style.event} ${isDarkMode ? null : style.lightMode}`}>
                                <header>
                                    <h4>Year: {item.year}</h4>
                                </header>
                                <p>{item.text}</p>
                                <footer>
                                    <Icon icon="./src/assets/images/Bookmark.svg"/>
                                    <a href={item.pages[0].content_urls.mobile.page} target="_blank">Read More</a>
                                </footer>
                             </div>
                             {/* <EventPoint /> */}
                             <div className={style.eventPoint}>
                                <span className={style.lineStyling}></span>
                                <div className={style.lineContainer}>
                                    <span className={style.pointStyling}></span>
                                    <span className={`${style.bottomLine}`}></span>
                                </div>
                             </div>
                            </section>
                    )
                })}
            </div>
    )
}