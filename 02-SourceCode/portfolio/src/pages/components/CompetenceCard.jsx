// Import styles
import { Competence, CompetenceWrapper, Language, Framework, Engine, Library, CompetenceImage, SubName } from "../../resources/css/about/competencesStyle";

function CompetenceCard({index, translations, competence, type})
{

    return (
        <CompetenceWrapper data-aos="zoom-in" key={index}>
            <Competence>
                <Language>
                    {competence.languages.map((language) => 
                    (
                        language.learned && 
                        (
                            <CompetenceImage big={true} src={language.image} />
                        )
                    ))}
                </Language>
                <Framework>
                    <span>{translations.framework}</span>
                    <div>
                        {competence.frameworks.map((framework) => 
                        (
                            framework.learned && 
                            (
                                <CompetenceImage src={framework.image} />
                            )
                        ))}
                    </div>
                </Framework>
                <Library>
                    <span>{translations.libraries}</span>
                    <div>
                        {competence.libraries.map((librarie) => 
                        (
                            librarie.learned && 
                            (
                                <CompetenceImage src={librarie.image} />
                            )
                        ))}
                    </div>
                </Library>
                    <SubName>
                        {competence.languages.map((language, index) => 
                        (
                            language.learned && 
                            (
                                <>
                                    {competence.languages.length >= 2 && index == competence.languages.length - 1 ? " - " : ""}{language.name}
                                </>
                            )
                        ))}
                    </SubName>
            </Competence>
        </CompetenceWrapper>
    )
}

export default CompetenceCard;