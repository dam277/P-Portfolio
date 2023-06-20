/** Import libraries */
import { styled } from 'styled-components'

/** Import styles */
import { responsive, colorPalette } from './styles'

/** Footer ================================================================================================*/
export const FooterContainer = styled.footer`
    padding: 10px;
    color: ${colorPalette.primary.colorDefault};
    text-align: center;
    background-color: ${colorPalette.primary.backGroundDefault};
    align-items: center;
`

export const FooterArticle = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: ${responsive.mobile}) 
    {
        flex-direction: row;
    }
`

export const FooterSection = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: ${props => props.flex};
`


/** Table ================================================================================================*/
export const Table = styled.table`
    background-color: ${colorPalette.footer.table.backGroundColor};
    border: 1px solid ${colorPalette.footer.table.border};
    border-collapse: collapse;
    width: 100%;
    
    @media (min-width: ${responsive.mobile}) 
    {
        margin-right: 20px;
        margin-left: 10px;
        width: 300px;
    }
    
`

export const Td = styled.td`
    border: 1px solid ${colorPalette.footer.table.border};
`

export const A = styled.a`
    display: block;
    box-shadow: inset 0 0 0 0 ${colorPalette.footer.link.hover.backGroundColor};
    color: ${colorPalette.footer.link.color};
    transition: color .3s ease-in-out, box-shadow .5s ease-in-out;
    &:hover {
        box-shadow: inset 1000px 0 0 0 ${colorPalette.footer.link.hover.backGroundColor};
        color: ${colorPalette.footer.link.hover.color};
    }
`

export const ImgProfile = styled.img`
    width: 100%;
`

export const Hr = styled.hr`
    width: 100%;

    @media (min-width: ${responsive.mobile}) 
    {
       ${(props) => 
            props.doNotDisplay && 
            {
                "display" : "none"
            }
        }
    }
`

/** About ================================================================================================*/
export const AboutProject = styled.div`
`

export const H2 = styled.h2`
    margin: 0;
    padding: 0;
    text-decoration: underline;
`

export const H3 = styled.h3`
    margin: 0;
    padding: 0;
    text-decoration: underline;
`

export const H4 = styled.h4`
    margin: 10px;
    padding: 0;
    text-decoration: underline;
`

export const ProgramsContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const ProgramTypeContainer = styled.div`
   
`

export const ImgProgram = styled.img`
    max-width: 150px;
    margin-left: 5px;
    margin-right: 5px;
`   

/** Copyright ================================================================================================*/
export const Copyright = styled.span`
    display: block;
    text-align: center;
`