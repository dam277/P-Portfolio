import { func } from "prop-types";
import { useState, createContext } from "react"

export const LangContext = createContext()

const LangProvider = ({ children }) => 
{
    const [language, setLanguage] = useState("EN");

    return (
        <LangContext.Provider value={{ language, setLanguage }}>
            {children}
        </LangContext.Provider>
    )
}

export default LangProvider;