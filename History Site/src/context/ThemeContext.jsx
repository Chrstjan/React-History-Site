import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const changeTheme = () => {
        setIsDarkMode(prev => !prev);
    }

    return (
        <ThemeContext.Provider value={{ isDarkMode, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}