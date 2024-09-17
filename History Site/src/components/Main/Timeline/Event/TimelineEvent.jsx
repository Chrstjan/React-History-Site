import style from "./TimelineEvent.module.scss";

export const TimelineEvent = ({data}) => {
    return (
            <div className={style.eventStyling}>
               {data.map((item) => {
                return (
                    <div>
                     <header>
                      <h4>{item.year}</h4>
                     </header>
                     <p>
                        {item.text}
                     </p>
                     <footer>
                        <a href="#">Read More</a>
                     </footer>
                    </div>
                )
               })}
            </div>
    )
}