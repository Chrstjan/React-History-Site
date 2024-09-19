import { Icon } from "../../Icon/Icon";
import style from "./TimelineEvent.module.scss";

export const TimelineEvent = ({data, isDarkMode}) => {
    return (
            <div className={`${style.eventStyling}`}>
                {data.map((item) => {
                    return (
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
                    )
                })}
            </div>
    )
}