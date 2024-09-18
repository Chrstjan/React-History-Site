import { useState } from "react";
import style from "./Modal.module.scss";

export const Modal = ({modalOpen, typedDate, headerText, dateText}) => {

    const [selectedDate, setSelectedDate] = useState("");

    const handleModal = () => {
        modalOpen(prev => !prev);
    }

    const handleDateTyped = (e) => {
        setSelectedDate(e.target.value);
    }

    const handleSendDate = () => {
        typedDate(selectedDate);
        handleModal();
    }

    return (
        <>
            <div onClick={() => handleModal()} className={style.overlayStyling}></div>
            <div className={style.modalStyling}>
                <h3>{headerText}</h3>
                <p>{dateText}</p>
                <label htmlFor="datePicker">Enter date:</label>
                <input onChange={(e) => handleDateTyped(e)} type="text" name="datePicker" />
                <button onClick={() => handleSendDate()}>Get Date</button>
            </div>
        </>
    )
}