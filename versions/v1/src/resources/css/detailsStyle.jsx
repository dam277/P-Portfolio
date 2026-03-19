/** Import libraries */
import { styled } from 'styled-components'

/** Import styles */
import { responsive, colorPalette } from './styles'
import { NavLink } from 'react-router-dom'
import GetColorFromCompletion from '../../utils/globals/getColorFromCompletion'

export const MainContainer = styled.main`
    background-color : ${colorPalette.main.backGroundDefault};
    color: ${colorPalette.primary.colorDefault};
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const WorkContainer = styled.div`
    max-width: 1500px;
    width: 80%;
    margin-top: 30px;
    background-color: ${colorPalette.main.detailsCardBackgroundColor};
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(19, 19, 19, 0.1);

    @media (min-width: ${responsive.mobile}) 
    {
        padding: 20px;
        width: 70%;
    }
`

export const Title = styled.h1`
    font-size: 2em;
    margin-bottom: 10px;
    margin: 10px 0;

    font-size: 27px;

    @media (min-width: ${responsive.mobile}) 
    {
        font-size: 30px;
    }
`

export const DescriptionTitle = styled.h2`
    margin: 10px 0;

    font-size: 19px;

    @media (min-width: ${responsive.mobile}) 
    {
        font-size: 23px;
    }
`

export const DescriptionContainer = styled.ul`
`

export const DescriptionSubtitle = styled.h3`
    color: ${colorPalette.primary.colorDefault};
    margin: 5px 0;

    font-size: 17px;

    @media (min-width: ${responsive.mobile}) 
    {
        font-size: 21px;
    }
`

export const Description = styled.li`
    font-size: 1.2em;
    color: ${colorPalette.primary.text.paragraph.color};
    margin: 3px 0;
    font-size: 15px;

    @media (min-width: ${responsive.mobile}) 
    {
        font-size: 19px;
    }
`

export const WorkDescriptionTable = styled.table`
    border-collapse: collapse;
    text-align: center;
    margin: 10px 0;
    font-size: 12px;

    @media (min-width: ${responsive.mobile}) 
    {
        font-size: 16px;
    }
`

export const WorkDescriptionThead = styled.thead`
    text-transform: uppercase;
`

export const WorkDescriptionTbody = styled.tbody`

`

export const WorkDescriptionTr = styled.tr`

`

export const WorkDescriptionTd = styled.td`
    border: 1px solid white;
    padding: 4px;
`

export const WorkImageWrapper = styled.div`
    width: 100%;
    max-height: 500px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 10px ${colorPalette.primary.colorDefault};
`

export const Image = styled.img`
    width: 100%;
    border-radius: 10px;
`

export const AssociatedWorks = styled.section`
    
`


export const AssociatedWorksContainer = styled.ul`
    
`

export const AssociatedWorksTitle = styled.h2`
    font-size: 1.5em;
    margin-bottom: 10px;

    font-size: 19px;

    @media (min-width: ${responsive.mobile}) 
    {
        font-size: 23px;
    }
`

export const AssociatedWork = styled.li`
    font-size: 1.2em;
    color: ${colorPalette.primary.text.paragraph.color};
    margin: 3px 0;

    font-size: 15px;

    @media (min-width: ${responsive.mobile}) 
    {
        font-size: 19px;
    }
`

export const AssociatedWorkLink = styled(NavLink)`
    
`

export const WorkDetailsContainer = styled.section`

`

export const DetailsTitle = styled.h2`
    margin: 10px 0;

    font-size: 19px;

    @media (min-width: ${responsive.mobile}) 
    {
        font-size: 23px;
    }
`

export const DetailsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
`

export const Detail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    flex: 1;
    margin: 10px;
    min-width: 200px;
`

export const DetailTitle = styled.h2`
    font-size: 1.2em;
    margin-bottom: 10px;

    font-size: 17px;

    @media (min-width: ${responsive.mobile}) 
    {
        font-size: 21px;
    }
`

export const DetailContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    color: ${(props) => props.completion && GetColorFromCompletion(props.completion).workCompletionColor};

    font-size: 15px;

    @media (min-width: ${responsive.mobile}) 
    {
        font-size: 19px;
    }
`

export const DetailImage = styled.img`
    height: 35px;
    margin: 0 5px;

    @media (min-width: ${responsive.mobile}) 
    {
        height: 40px;
    }
`

export const DetailsLink = styled.a`
    
`

export const WorkChoiceContainer = styled.div`
    max-width: 1500px;
    width: 70%;
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const WorkChoiceLink = styled(NavLink)`
    display: flex;
    justify-content: ${(props) => props.align && props.align};
    flex: 1;
    text-decoration: none;
    margin: 2px;
`

export const TextButton = styled.span`
    text-transform: uppercase;
`
