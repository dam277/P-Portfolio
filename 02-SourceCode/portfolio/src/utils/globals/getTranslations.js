// Import Hooks
import { useContext } from "react";

// Import Contexts
import { LangContext } from "../contexts/LangContext";

/**
 * Get the translations of the current language
 * @param {Object} fr => French object of translations
 * @param {Object} en => English object of translations
 * @returns One of the objects received
 */
function GetTranslations(fr, en)
{
    // Get the actual language from the context
    const { language } = useContext(LangContext);
    
    // Check what is the current language and return the translations
    switch (language) 
    {
        case 'FR': return fr;
        case 'EN': return en;
        default: return en;
    }
}

export default GetTranslations;