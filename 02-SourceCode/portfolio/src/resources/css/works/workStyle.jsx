/** Import libraries */
import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom'

/** Import styles */
import { responsive, colorPalette } from '../styles'
import GetColorFromCompletion from '../../../utils/globals/getColorFromCompletion'
import GetNumberFromEvenOrOdd from '../../../utils/globals/getNumberFromEvenOrOdd'

export const WorkContainer = styled.div`
    margin-top: 20px;
    width: 80%;
    background-color: ${(props) => GetColorFromCompletion(props.completion).backGroundColor};
    border: 2px solid ${(props) => GetColorFromCompletion(props.completion).borderColor};
    text-align: left;
    padding-bottom: 10px;
    transition: .2s ease-in-out;
    text-decoration: none;
    color: ${colorPalette.primary.colorDefault};
    position: relative;
`

export const WorkImageWrapper = styled.div`
    width: 100%;
    height: 100px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: ${responsive.mobile}) 
    {
        height: 200px;
    }
`

export const WorkImage = styled.img`
    width: 100%;
`

export const WorkContent = styled.div`

`

export const WorkTitleContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`

export const WorkTitle = styled.h2`
    margin-left: 10px;
    margin-bottom: 0;
    flex: 1;
    font-size: 17px;

    @media (min-width: ${responsive.mobile}) 
    {
        font-size: 28px;
    }
`

export const WorkDistinctionImagesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: right;
    align-items: center;
    flex: 1;
`

export const WorkDistinctionImage = styled.img`
    height: 35px;
    margin-right: 10px;

    @media (min-width: ${responsive.mobile}) 
    {
        height: 47px;
    }
`

export const WorkDescription = styled.div`
    margin-left: 10px;
    margin-right: 10px;
    font-size: 13px;

    @media (min-width: ${responsive.mobile}) 
    {
        font-size: 18px;
    }
`

export const WorkDescriptionTitle = styled.h3`
    padding: 0;
    margin-bottom: 5px;
`

export const WorkDescriptionSubtitle = styled.h4`
    font-size: 14px;
`

export const WorkDescriptionParagraph = styled.p`
    margin: 5px 10px;
    font-size: 16px;
    padding: 0;
`

export const WorkDescriptionTable = styled.table`
    border-collapse: collapse;
    text-align: center;
    font-size: 12px;

    @media (min-width: ${responsive.mobile}) 
    {
        font-size: 16px;
    }
`

export const WorkDescriptionThead = styled.thead`
    background-color: ${(props) => GetColorFromCompletion(props.completion).table.thead};
    text-transform: uppercase;
`

export const WorkDescriptionTbody = styled.tbody`

`

export const WorkDescriptionTr = styled.tr`
    background-color : ${(props) => props.index && GetColorFromCompletion(props.completion).table.tbody[GetNumberFromEvenOrOdd(props.index)]};
`

export const WorkDescriptionTd = styled.td`
    border: 1px solid white;
    padding: 4px;
`

export const WorkDescriptionAssociatedWorksContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const WorkCompletion = styled.sub`
    flex: 1;
    margin-left: 10%;
    font-size: 11px;
    min-width: 55px;
    color: ${(props) => GetColorFromCompletion(props.completion).workCompletionColor};

    @media (min-width: ${responsive.mobile}) 
    {
        font-size: 14px;
    }
`

export const WorkFooter = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    flex-wrap: wrap;
`

export const DetailsWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: right;
    align-items: right;
    margin-right: 10px;
`