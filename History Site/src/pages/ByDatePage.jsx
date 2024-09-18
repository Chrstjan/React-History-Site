import { useEffect, useState } from "react"
import { Header } from "../components/Header/Header"
import { HeaderBoard } from "../components/Header/HeaderBoard/HeaderBoard"
import { DateWrapper } from "../components/Main/DateWrapper/DateWrapper"
import { Icon } from "../components/Main/Icon/Icon"
import { Navigation } from "../components/Navigation/Navigation"
import { Timeline } from "../components/Main/Timeline/Timeline"
import { TimelineEvent } from "../components/Main/Timeline/Event/TimelineEvent"
import { Modal } from "../components/Modal/Modal"

export const ByDatePage = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState("");

    const handleModal = () => {
        setModalOpen(prev => !prev);
    }

    useEffect(() => {
        const getByDateDate = async () => {
            const res = await fetch(`https://history.muffinlabs.com/date/${selectedDate}`)
            const data = await res.json();
            setSelectedDate(data);
        }

        getByDateDate();
        console.log(selectedDate);
    }, [selectedDate])

    return (
        <>
            <Header>
                <HeaderBoard headerText="On" action={handleModal} date="22/08" subText="What happened on this day - Here you can enter a specific date to get only events that happened on this date"/>
            </Header>
            <Navigation />
            {modalOpen ? <Modal modalOpen={setModalOpen} typedDate={setSelectedDate} headerText="Get Event by date" dateText="Must follow month/day format (2/14)"/> : null}
            <DateWrapper>
                <Icon icon="./src/assets/images/Light.svg"/>
                {/* <Timeline>
                    <TimelineEvent />
                </Timeline> */}
            </DateWrapper>
        </>
    )
}