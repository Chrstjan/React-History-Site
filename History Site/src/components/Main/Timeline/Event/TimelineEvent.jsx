import { Icon } from "../../Icon/Icon";
import style from "./TimelineEvent.module.scss";

export const TimelineEvent = ({data}) => {
    return (
            <div className={style.eventStyling}>
                {data.map((item) => {
                    return (
                        <>
                            <div className={style.event}>
                                <header>
                                    <h4>Year: {item.year}</h4>
                                </header>
                                <p>{item.text}</p>
                                <footer>
                                    <Icon icon="./src/assets/images/Bookmark.svg"/>
                                    <a href={item.links[0].link} target="_blank">Read More</a>
                                </footer>
                            </div>
                        </>
                    )
                })}
            </div>
    )
}