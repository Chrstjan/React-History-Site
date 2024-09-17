import style from "./Wrapper.module.scss";

export const Wrapper = ({children}) => {
    return (
        <div className={style.wrapperStyling}>
            {children}
        </div>
    )
}