// Import Hooks
import { useState, createContext } from "react"

// Create Context
export const LangContext = createContext()

/**
 * Lang provider
 * @param {HTMLElement} children => Children element to display
 * @returns {HTMLElement} component html elements
 */
const LangProvider = ({ children }) => 
{
    // Set States
    const [language, setLanguage] = useState("EN");         // Current language of the website

    // Return html elements
    return (
        <LangContext.Provider value={{ language, setLanguage }}>
            {children}
        </LangContext.Provider>
    )
}

export default LangProvider;