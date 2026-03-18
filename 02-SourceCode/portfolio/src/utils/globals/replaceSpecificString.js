/**
 * @author : Damien Loup
 * @description : Replace specific strings from received values
 */

import eKeyWords from "../../resources/datas/enums/eKeyWords";

// Functions which generate a value to replace some text
const replaceFunctions =
{
    today : (value) =>
    {
        // Get the current date
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();
        const result = `${day}.${month}.${year}`;

        return {result : result, replace : value};
    },
    age : (value) => 
    {
        // Get the matched dates
        const dateMatched = [...value.matchAll(/(\{age:(.*?)})/g)];

        // Check if there is a match
        if(dateMatched.length < 1)
            return value;

        // Set dates
        const today = new Date();
        const receivedDate = new Date(dateMatched[0][2]);

        // Set result
        const result = today.getFullYear() - receivedDate.getFullYear();
    
        // Adjust result if birthday hasn't occurred yet this year
        if (today.getMonth() < receivedDate.getMonth() || (today.getMonth() === receivedDate.getMonth() && today.getDate() < receivedDate.getDate())) {
            result--;
        }

        // Set the replace value
        const replace = dateMatched[0][1]
    
        // Return the object of values
        return {result : result, replace : replace};
    }
}

// Element in text which can be replaced
const elementsToReplace = 
[
    { function : replaceFunctions.today, string : eKeyWords.today },
    { function : replaceFunctions.age, string : eKeyWords.age }
];

/**
 * Replace a specific string value
 * @param {string} value => Value to replace with another string
 */
function ReplaceSpecificString(value)
{
    elementsToReplace.forEach((element) => 
    {
        // Check if value includes a tag
        if (!value.includes(element.string))
            return;
        
        // Get the replace and result value to replace the text
        const { replace, result } = element.function(value);
        value = value.toString().replace(replace, result + " ");
    });
    return value;
}

export default ReplaceSpecificString;