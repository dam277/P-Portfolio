// Import the styles
import { LanguageContainer, LanguageSelector, LanguageOption } from "../../resources/css/headerStyle";
import { responsive } from "../../resources/css/styles";

// Import datas
import languages from "../../resources/datas/languages.json";

// Import hooks
import { useState } from "react";

function Lang({language, setLanguage, translations})
{
    // Check if the website is bigger than a certain media px to change the styles
    const checkIsBig = () => window.matchMedia(`(min-width: ${responsive.mobile})`).matches;
    const [isBig, setIsBig] = useState(checkIsBig());
    window.addEventListener("resize", () => setIsBig(checkIsBig()));

    return(
        <LanguageContainer>
            <LanguageSelector value={language} onChange={(e) => setLanguage(e.target.value)}>
                {languages.map((actualLanguage, index) => 
                (
                    <LanguageOption key={actualLanguage-index} value={actualLanguage}>
                        {isBig ? translations.header[actualLanguage.toLowerCase()] : actualLanguage}
                    </LanguageOption>
                ))}
            </LanguageSelector>
        </LanguageContainer>
    )
}

export default Lang;