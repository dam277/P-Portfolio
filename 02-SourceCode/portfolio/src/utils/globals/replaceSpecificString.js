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
        const dateMatched = [...value.matchAll(/\{age:(.*?)}/g)];
        if(dateMatched.length < 1)
            return value;

        const today = new Date();
        const receivedDate = new Date(dateMatched[0][1]);
        const result = today.getFullYear() - receivedDate.getFullYear();
    
        // Adjust result if birthday hasn't occurred yet this year
        if (today.getMonth() < receivedDate.getMonth() || (today.getMonth() === receivedDate.getMonth() && today.getDate() < receivedDate.getDate())) {
            result--;
        }
    
        return {result : result, replace : value};
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
        if (!value.includes(element.string))
            return;
        
        const { replace, result } = element.function(value);
        value = value.toString().replace(replace, result + " ");
    });
    return value;
}

export default ReplaceSpecificString;