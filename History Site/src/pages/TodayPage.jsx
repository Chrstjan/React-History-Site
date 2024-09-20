import { useContext, useEffect, useState } from "react"
import { Header } from "../components/Header/Header"
import { HeaderBoard } from "../components/Header/HeaderBoard/HeaderBoard"
import { Navigation } from "../components/Navigation/Navigation"
import { DateWrapper } from "../components/Main/DateWrapper/DateWrapper"
import { Icon } from "../components/Main/Icon/Icon"
import { Timeline } from "../components/Main/Timeline/Timeline"
import { TimelineEvent } from "../components/Main/Timeline/Event/TimelineEvent"
import { ThemeContext } from "../context/ThemeContext"
import { useQuery } from "@tanstack/react-query"

export const TodayPage = () => {
    const {isDarkMode} = useContext(ThemeContext);
    const [visibleEvents, setVisibleEvents] = useState(10);

    let today = new Date();
    let month = String(today.getMonth() + 1).padStart(2,'0');
    let day = String(today.getDate()).padStart(2,'0');

    const { isPending, error, data } = useQuery({
        queryKey: ["Getting data for today"],
        queryFn: async () => {
            const res = await fetch(`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`)
            const data = await res.json();
            return data;
        },
        staleTime: 1000 * 600
    });

    //Lavet et tomt array til at komme de sorteret objects ind i
    let sortedEvents = [];
    if (data) {
        //Laver en kopi af data.events og modificere kopien med en .sort til at tage de laveste tal først
        //Og sætter det tomme array til at være den nye modificeret kopi
        sortedEvents = [...data.events].sort((a, b) => a.year - b.year);
    }

    const loadMoreEvents = () => {
        console.log("Bottom pit!");
        setVisibleEvents(prev => prev + 10);
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            //Checker om brugeren er i bunden af siden. Når brugeren er i bunden køre loadMoreEvents funktionen
            if (windowHeight + scrollPosition >= documentHeight) {
                // console.log("Bottom Pit!");
                loadMoreEvents();
            }

        }

        window.addEventListener("scroll", handleScroll);

        return () => { 
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])
    
    return (
        <>
            <Header>
                <HeaderBoard headerText="On This Day" isDarkMode={isDarkMode} subText="What happened on this day - historical events, deaths and births thoughout time"/>
            </Header>
            <Navigation isDarkMode={isDarkMode}/>
            <DateWrapper>
                <Icon icon="./src/assets/images/Light.svg" type="lightbulb" isDarkMode={isDarkMode}/>
                {data ? 
                 <Timeline isDarkMode={isDarkMode}>
                    <TimelineEvent data={sortedEvents.slice(0, visibleEvents)} isDarkMode={isDarkMode}/>
                 </Timeline> 
                 : <h2>Loading...</h2>}
            </DateWrapper>
        </>
    )
}