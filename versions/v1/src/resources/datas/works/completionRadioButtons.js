// Import enums
import eCompletionIds from "../enums/works/eCompletionIds";

const CompletionRadioButtons = 
[
    {
        id : eCompletionIds.all,
        value : "all",
        defaultCheck : true
    },
    {
        id : eCompletionIds.finished,
        value : "finished",
        defaultCheck : false
    },
    {
        id : eCompletionIds.inDevelopment,
        value : "in development",
        defaultCheck : false
    },
    {
        id : eCompletionIds.notStarted,
        value : "not started",
        defaultCheck : false
    }
]

export default CompletionRadioButtons;