// Import the styles
import { LanguageContainer, LanguageSelector, LanguageOption } from "../../resources/css/headerStyle";

// Import datas
import languages from "../../resources/datas/languages.json";

function Lang({language, setLanguage, translations})
{
    return(
        <LanguageContainer>
            <LanguageSelector onChange={(e) => setLanguage(e.target.value)}>
                {languages.map((actualLanguage, index) => (
                    <LanguageOption key={actualLanguage-index} value={actualLanguage}>
                        {translations.header[actualLanguage.toLowerCase()]}
                    </LanguageOption>
                ))}
            </LanguageSelector>
        </LanguageContainer>
    )
}

export default Lang;