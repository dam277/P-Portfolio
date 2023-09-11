// Import the styles
import { LanguageContainer, LanguageSelector, LanguageOption } from "../../resources/css/headerStyle";

// Import datas
import languages from "../../resources/datas/langs.json";

function Lang({language, setLanguage, translations, isBig})
{
    return(
        <LanguageContainer>
            <LanguageSelector value={language} onChange={(e) => setLanguage(e.target.value)}>
                {languages.map((actualLanguage, index) => 
                (
                    <LanguageOption key={`${actualLanguage}-${index}`} value={actualLanguage}>
                        {isBig ? translations.header[actualLanguage.toLowerCase()] : actualLanguage}
                    </LanguageOption>
                ))}
            </LanguageSelector>
        </LanguageContainer>
    )
}

export default Lang;