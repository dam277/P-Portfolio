/**
 * @author : Damien Loup 
 * @component : CompetenceCard
 * @description : Display a competence card in the about page
 */

//#region - Import Libraries
//#endregion

//#region - Import Hooks
//#endregion

//#region - Import Globals
//#endregion

//#region - Import Enums 
//#endregion

//#region - Import Contexts
//#endregion

//#region - Import Components
//#endregion

//#region - Import Translations
//#endregion

//#region - Import Datas
//#endregion

//#region - Import Styles
import { Competence, CompetenceWrapper, Language, Framework, Engine, Library, CompetenceImage, SubName } from "../../resources/css/about/competencesStyle";
//#endregion

//#region - Import Images
//#endregion

/**
 * Component description
 * @param {number} index => Index of the competence
 * @param {object} translations => Translations of the page
 * @param {object} competence => Competence object
 * @param {string} type => Type of competence (engine or language)
 * @returns {HTMLElement} CompetenceCard html elements
 */
function CompetenceCard({index, translations, competence, type})
{
    // Return html elements
    return (
        <CompetenceWrapper data-aos="zoom-in" key={index}>
            <Competence>
                {/* Check if the competence is an engine to display it first */}
                {type === "engine" && 
                (
                    <Engine>
                        {competence.engines.map((engine, index) => 
                        (
                            engine.learned && 
                            (
                                <CompetenceImage key={`${engine.name}-${index}`} big={true} src={engine.image} />
                            )
                        ))}
                    </Engine>
                )}
                {/* Display the languages */}
                <Language>
                    {/* Check if the type is an engine to display the language second */}
                    {type === "engine" && (<span>{translations.languages}</span>)}
                    {competence.languages.map((language, index) => 
                    (
                        language.learned && 
                        (
                            <CompetenceImage key={`${language.name}-${index}`} big={true} src={language.image} />
                        )
                    ))}
                </Language>
                {/* Check if the type is a language to display frameworks */}
                {type === "language" && 
                ( 
                    <Framework>
                        <span>{translations.framework}</span>
                        <div>
                            {competence.frameworks.map((framework, index) => 
                            (
                                framework.learned && 
                                (
                                    <CompetenceImage key={`${framework.name}-${index}`} src={framework.image} />
                                )
                            ))}
                        </div>
                    </Framework>
                )}
                {/* Display the libraries */}
                <Library>
                    <span>{translations.libraries}</span>
                    <div>
                        {competence.libraries.map((librarie, index) => 
                        (
                            librarie.learned && 
                            (
                                <CompetenceImage key={`${librarie.name}-${index}`} src={librarie.image} />
                            )
                        ))}
                    </div>
                </Library>
                {/* Display a subName */}
                <SubName>
                    {/* Check if the type is engine or language to write the correct name */}
                    {type === "engine" ?
                    (
                        <>
                            {competence.engines.map((engine, index) => 
                            (
                                engine.learned && 
                                (
                                    <span key={`${engine.name}-${index}`} >
                                        {competence.engines.length >= 2 && index == competence.engines.length - 1 ? " - " : ""}{engine.name}
                                    </span>
                                )
                            ))}
                        </>
                    ) 
                    : 
                    (
                        <>
                            {competence.languages.map((language, index) => 
                            (
                                language.learned && 
                                (
                                    <span key={`${language.name}-${index}`} >
                                        {competence.languages.length >= 2 && index == competence.languages.length - 1 ? " - " : ""}{language.name}
                                    </span>
                                )
                            ))}
                        </>
                    )}
                </SubName>
            </Competence>
        </CompetenceWrapper>
    )
}

export default CompetenceCard;