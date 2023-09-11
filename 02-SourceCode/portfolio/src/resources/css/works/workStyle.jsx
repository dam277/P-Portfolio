/** Import libraries */
import { styled } from 'styled-components'

/** Import styles */
import { responsive, colorPalette } from '../styles'
import eCompletionIds from '../../datas/enums/works/eCompletionIds'

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
    flex: 1;
`

export const WorkLanguagesImageContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: right;
    align-items: center;
    flex: 1;
`

export const WorkLanguagesImage = styled.img`
    height: 45px;
    margin-right: 10px;
`

export const WorkDescription = styled.p`
    margin-left: 10px;
`

export const WorkCompletion = styled.sub`
    margin-left: 10%;
`

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
            return null;
    }
}