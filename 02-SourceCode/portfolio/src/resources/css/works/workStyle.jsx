/** Import libraries */
import { styled } from 'styled-components'

/** Import styles */
import { responsive, colorPalette } from '../styles'
import eCompletionIds from '../../datas/enums/works/eCompletionIds'
import GetColorFromCompletion from '../../../utils/globals/getColorFromCompletion'

export const WorkContainer = styled.div`
    margin-top: 20px;
    width: 80%;
    background-color: ${(props) => GetColorFromCompletion(props.completion).backGroundColor};
    border: 2px solid ${(props) => GetColorFromCompletion(props.completion).borderColor};
    text-align: left;
    padding-bottom: 10px;
    transition: .2s ease-in-out;
    cursor: pointer;

    &:hover
    {
        width: 81%;
    }
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
    width: 100%;
`

export const WorkTitle = styled.h2`
    margin-left: 10px;
    margin-bottom: 0;
    flex: 1.18;
    font-size: 17px;

    @media (min-width: ${responsive.mobile}) 
    {
        font-size: 28px;
    }
`

export const WorkLanguagesImageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: right;
    align-items: center;
    flex: 1;
`

export const WorkLanguagesImage = styled.img`
    height: 30px;
    margin-right: 10px;

    @media (min-width: ${responsive.mobile}) 
    {
        height: 42px;
    }
`

export const WorkDescription = styled.p`
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

export const WorkDescriptionParagraph = styled.p`
    margin: 5px 10px;
    font-size: 16px;
    padding: 0;
`

export const WorkDescriptionTable = styled.table`
    
`

export const WorkDescriptionThead = styled.thead`
    
`

export const WorkDescriptionTbody = styled.tbody`

`

export const WorkDescriptionTr = styled.tr`
    
`

export const WorkDescriptionTd = styled.td`
    
`

export const WorkDescriptionAssociatedWorksContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const WorkCompletion = styled.sub`
    margin-left: 10%;
    font-size: 11px;
    color: ${(props) => GetColorFromCompletion(props.completion).workCompletionColor};

    @media (min-width: ${responsive.mobile}) 
    {
        font-size: 14px;
    }
`