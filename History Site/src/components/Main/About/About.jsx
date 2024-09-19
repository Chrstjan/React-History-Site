import style from "./About.module.scss";

export const About = ({isDarkMode}) => {
    return (
        <>
            <article className={`${style.aboutStyling} ${isDarkMode ? null : style.lightMode}`}>
                    <header>
                        <h3>Welcome to Time Traveler's Hub</h3>
                    </header>
                    <p>Ever wondered what happened on this very day throughout history? Or perhaps you’re curious about a specific date in the past? At Time Traveler’s Hub, we’ve got your curiosity covered! Since 1947, we’ve been archiving the world’s most fascinating moments—from ground-shaking historical events to quirky, forgotten tales.</p>
                    <p>Unlike some other “time machines” out there that only rewind websites, we’re all about diving into the real-life drama and intrigue of human history.</p>
                    <p>Who knows, you might even stumble upon sightings of a man dressed as a spider fighting crime or other intriguing snippets from the annals of history!</p>
                </article>
        </>
    )
}