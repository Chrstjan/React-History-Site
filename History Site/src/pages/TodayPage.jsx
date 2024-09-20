import { useContext, useEffect, useState } from "react";
import { Header } from "../components/Header/Header";
import { HeaderBoard } from "../components/Header/HeaderBoard/HeaderBoard";
import { Navigation } from "../components/Navigation/Navigation";
import { DateWrapper } from "../components/Main/DateWrapper/DateWrapper";
import { Icon } from "../components/Main/Icon/Icon";
import { Timeline } from "../components/Main/Timeline/Timeline";
import { TimelineEvent } from "../components/Main/Timeline/Event/TimelineEvent";
import { ThemeContext } from "../context/ThemeContext";
import { useQuery } from "@tanstack/react-query";

export const TodayPage = () => {
    const { isDarkMode } = useContext(ThemeContext);
    //Bruges til lazy loading
    const [visibleEvents, setVisibleEvents] = useState(10);

    let today = new Date();
    let month = String(today.getMonth() + 1).padStart(2, '0');
    let day = String(today.getDate()).padStart(2, '0');

    const { isPending, error, data } = useQuery({
        queryKey: ["Getting data for today"],
        queryFn: async () => {
            const res = await fetch(`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`);
            const data = await res.json();
            return data;
        },
        staleTime: 1000 * 600,
    });

    //Sikre at data findes. Hvis data findes lav en kopi af data og modifecer objects og gem i en ny array. Ellers sæt sortedEvents til et tomt array
    let sortedEvents = data ? [...data.events].sort((a, b) => a.year - b.year) : [];

    const loadMoreEvents = () => {
        //Tilføjer 10 mere til VisibleEvents så den viser 10 events mere
        console.log("Bottom pit!");
        setVisibleEvents(prev => prev + 10);
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            //Hvis brugeren har nået bunden af siden. Køre loadMoreEvents funktion
            if (windowHeight + scrollPosition >= documentHeight) {
                loadMoreEvents();
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    //Når den henter data viser den en loading besked
    if (isPending) return <h2>Loading...</h2>;
    //Hvis der opstår en fejl i fetch viser den error message i et h2 tag
    if (error) return <h2>Error: {error.message}</h2>;

    return (
        <>
            <Header>
                <HeaderBoard headerText="On This Day" isDarkMode={isDarkMode} subText="What happened on this day - historical events, deaths and births throughout time" />
            </Header>
            <Navigation isDarkMode={isDarkMode} />
            <DateWrapper>
                <Icon icon="./src/assets/images/Light.svg" type="lightbulb" isDarkMode={isDarkMode} />
                <Timeline isDarkMode={isDarkMode}>
                    {/*Slicer arrayet så den kun viser objects for det antal der er i visibleEvents til lazy loading  */}
                    <TimelineEvent data={sortedEvents.slice(0, visibleEvents)} isDarkMode={isDarkMode} />
                </Timeline>
            </DateWrapper>
        </>
    );
}