// Import enums
import eTypeIds from "../enums/works/eTypeIds";

const TypeRadioButtons = 
[
    {
        id : eTypeIds.all,
        value : "all",
        defaultCheck : true
    },
    {
        id : eTypeIds.courses,
        value : "courses",
        defaultCheck : false
    },
    {
        id : eTypeIds.projects,
        value : "projects",
        defaultCheck : false
    }
]

export default TypeRadioButtons;