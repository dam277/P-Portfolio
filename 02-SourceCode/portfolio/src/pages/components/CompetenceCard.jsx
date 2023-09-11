// Import styles
import { Competence, CompetenceWrapper, Language, Framework, Engine, Library, CompetenceImage, SubName } from "../../resources/css/about/competencesStyle";

function CompetenceCard({index, translations, competence, type})
{

    return (
        <CompetenceWrapper data-aos="zoom-in" key={index}>
            <Competence>
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
                <Language>
                    {type === "engine" && (<span>{translations.languages}</span>)}
                    {competence.languages.map((language, index) => 
                    (
                        language.learned && 
                        (
                            <CompetenceImage key={`${language.name}-${index}`} big={true} src={language.image} />
                        )
                    ))}
                </Language>
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
                <SubName>
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