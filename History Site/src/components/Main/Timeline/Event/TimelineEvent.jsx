import style from "./TimelineEvent.module.scss";

export const TimelineEvent = ({data}) => {
    return (
            <div className={style.eventStyling}>
              <div className={style.event}>
                     <header>
                      <h4>Year: {data[0].year}</h4>
                     </header>
                     <p>
                        {data[0].text}
                     </p>
                     <footer>
                        <a href="#">Read More</a>
                     </footer>
                </div>
              <div className={style.event}>
                     <header>
                      <h4>Year: {data[1].year}</h4>
                     </header>
                     <p>
                        {data[1].text}
                     </p>
                     <footer>
                        <a href="#">Read More</a>
                     </footer>
                </div>
            </div>
    )
}