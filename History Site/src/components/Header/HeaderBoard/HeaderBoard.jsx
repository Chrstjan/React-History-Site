import style from "./HeaderBoard.module.scss";

export const HeaderBoard = ({headerText, date, subText}) => {
    return (
            <div className={style.boardStyling}>
                <header>
                    <span className={style.selectStyling}>
                        <h2>{headerText}</h2>
                        {date ? <button className={style.buttonStyling}>{date}</button> : null}
                    </span>
                    <p>{subText}</p>
                </header>
            </div>
    )
}