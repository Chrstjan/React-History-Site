import style from "./HeaderBoard.module.scss";

export const HeaderBoard = ({headerText, action, date, subText}) => {
    return (
            <div className={style.boardStyling}>
                <header>
                    <span className={style.selectStyling}>
                        <h2>{headerText}</h2>
                        {date ? <button onClick={() => action()} className={style.buttonStyling}>{date}</button> : null}
                    </span>
                    <p>{subText}</p>
                </header>
            </div>
    )
}