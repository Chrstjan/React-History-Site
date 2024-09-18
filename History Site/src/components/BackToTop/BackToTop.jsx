import { useEffect, useRef, useState } from "react"
import style from "./BackToTop.module.scss";

export const BackToTop = () => {
    const myRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const scrollTopTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;

        const totalScrollable = documentHeight - windowHeight;

        const scrollProgress = (scrollY / totalScrollable) * 100;
        console.log(scrollProgress);

        if (scrollProgress > 30) {
            setIsVisible(true);
        }
        else {
            setIsVisible(false);
        }
        
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
        {isVisible ? <button className={style.topStyling} onClick={() => scrollTopTop()} ref={myRef}>Back to top</button> : null}
        </>
    )
}