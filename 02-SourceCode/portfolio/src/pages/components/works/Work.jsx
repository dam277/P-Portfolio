import { WorkContainer, WorkImageWrapper, WorkImage, WorkContent, WorkTitle, WorkDescription, WorkCompletion } from "../../../resources/css/works/workStyle";

function Work({ translations, keyValue, image, title, completion })
{
    console.log(translations);
    return (
        <WorkContainer key={keyValue} completion={completion}>
            <WorkImageWrapper>
                <WorkImage src={image}/>
            </WorkImageWrapper>
            <WorkContent>
                <WorkTitle>{title}</WorkTitle>
                <WorkDescription>Description</WorkDescription>
                <WorkCompletion>{translations.works.completion[completion]}</WorkCompletion>
            </WorkContent>
        </WorkContainer>
    )
}

export default Work;