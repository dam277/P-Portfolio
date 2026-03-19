import { colorPalette } from "../../resources/css/styles";
import eCompletionIds from "../../resources/datas/enums/works/eCompletionIds";

/**
 * Get the the color of the completion from the color palette
 * @param {string} completion => Completion id
 * @returns string
 */
function GetColorFromCompletion(completion)
{
    switch (completion) 
    {
        case eCompletionIds.notStarted:
            return colorPalette.main.project.notStarted;
        case eCompletionIds.inDevelopment:
            return colorPalette.main.project.inDevelopment;
        case eCompletionIds.finished:
            return colorPalette.main.project.finished;
        default:
            return colorPalette.main.project.inDevelopment;
    }
}

export default GetColorFromCompletion;