import style from "./DateWrapper.module.scss";

export const DateWrapper = ({children}) => {
    return (
        <section className={style.DateWrapper}>{children}</section>
    )
}