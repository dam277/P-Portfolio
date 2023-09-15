import { Text } from "../../../resources/css/mainStyle";

/**
 * Get the color of the specified element
 * @param {string} text => String to get the color
 * @returns ColoredText html elements
 */
function ColoredText({ text })
{
    // Use a regex to get the tags with the colors
    const colorMatches = [...text.matchAll(/\{color:(.*?),id:(.*?)?\}(.*?)\{\/color\}/g)];
    console.log(colorMatches);

    // Get an array of object of contents that will be write to the output
    const textDatas = colorMatches.map((match, index) => 
    {
        // Get the color tag, value and content inside the tags
        const colorTag = match[0];
        const colorValue = match[1];
        const colorId = match[2];
        const contentInsideTag = match[3];

        // Get the start and end index of the outside content
        const startIndex = match.index + colorTag.length;
        const endIndex = colorMatches[index + 1] && colorMatches[index + 1].index;

        // Get the content Outside the tags before the next
        const contentOutsideTag = text.slice(startIndex, endIndex);

        // Return an object of colored content
        return { color: colorValue, contentInsideTag: contentInsideTag, contentOutsideTag: contentOutsideTag };
    });

    // Return the html elements
    return (
        textDatas.map(({ color, contentInsideTag, contentOutsideTag }) =>
        (
            <>
                <Text color={color}>{contentInsideTag}</Text>
                {contentOutsideTag}
            </>
            
        ))
    );

}

export default ColoredText;