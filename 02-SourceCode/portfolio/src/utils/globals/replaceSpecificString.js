/**
 * @author : Damien Loup
 * @description : Replace specific strings from received values
 */

import eKeyWords from "../../resources/datas/enums/eKeyWords";

// Functions which generate a value to replace some text
const replaceFunctions =
{
    today : () =>
    {
        // Get the current date
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();
        return `${day}.${month}.${year}`;
    }
}

// Element in text which can be replaced
const elementsToReplace = 
[
    { function : replaceFunctions.today, string : eKeyWords.today }
];

/**
 * Replace a specific string value
 * @param {string} value => Value to replace with another string
 */
function ReplaceSpecificString(value)
{
    elementsToReplace.forEach((element) => value = value.toString().replace(element.string, element.function))
    return value;
}

export default ReplaceSpecificString;