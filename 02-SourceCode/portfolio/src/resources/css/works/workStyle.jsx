/** Import libraries */
import { styled } from 'styled-components'

/** Import styles */
import { responsive, colorPalette } from '../styles'
import eProjectCompletion from '../../datas/enums/eProjectCompletion'

export const WorkContainer = styled.div`
    margin-top: 20px;
    width: 80%;
    background-color: ${(props) => GetColorFromCompletion(props.completion).backGroundColor};
    border: 2px solid ${(props) => GetColorFromCompletion(props.completion).borderColor};
    text-align: left;
    padding-bottom: 10px;
`

export const WorkImageWrapper = styled.div`
    width: 100%;
    height: 200px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const WorkImage = styled.img`
    width: 100%;
`

export const WorkContent = styled.div`

`

export const WorkTitle = styled.h2`
    margin-left: 10px;
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
        case eProjectCompletion.notStarted:
            return colorPalette.main.project.notStarted;
        case eProjectCompletion.inDevelopment:
            return colorPalette.main.project.inDevelopment;
        case eProjectCompletion.finished:
            return colorPalette.main.project.finished;
        default:
            return null;
    }
}