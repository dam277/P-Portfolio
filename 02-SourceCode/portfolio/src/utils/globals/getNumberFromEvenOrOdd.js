/**
 * Get a number of 0 or 1 to check if the received number is odd or even.
 * @param {Number} number => Number to check
 * @returns int
 */
function GetNumberFromEvenOrOdd(number)
{
    if (number % 2 === 0)
        return 0;
    else
        return 1; 
}

export default GetNumberFromEvenOrOdd;