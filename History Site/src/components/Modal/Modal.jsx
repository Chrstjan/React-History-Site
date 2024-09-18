import { useState } from "react";
import style from "./Modal.module.scss";

export const Modal = ({modalOpen, month, day, headerText, dateText}) => {
    const [selectedMonth, setSelecteMonth] = useState("");
    const [selectedDay, setSelecteDay] = useState("");

    const handleModal = () => {
        modalOpen(prev => !prev);
    }

    const handleMonth = (e) => {
        setSelecteMonth(e.target.value);
    }

    const handleDay = (e) => {
        setSelecteDay(e.target.value);
    }

    const handleSendDate = () => {
        month(selectedMonth);
        day(selectedDay);
        handleModal();
    }

    return (
        <>
            <div onClick={() => handleModal()} className={style.overlayStyling}></div>
            <div className={style.modalStyling}>
                <h3>{headerText}</h3>
                <p>{dateText}</p>
                <label htmlFor="datePicker">Enter Month:</label>
                <input onChange={(e) => handleMonth(e)} type="text" name="datePicker" />
                <label htmlFor="dayPicker">Enter Day:</label>
                <input onChange={(e) => handleDay(e)} type="text" name="dayPicker" />
                <button onClick={() => handleSendDate()}>Send Date</button>
            </div>
        </>
    )
}