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
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;

    @media (min-width: ${responsive.laptop}) 
    {
        flex-direction: row;
    }
`

export const FooterSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: ${props => props.flex};
`

export const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
`

export const A = styled.a`
    display: flex;
    align-items: center;
    font-size: 17px;
    text-decoration: none;
    margin: 10px;
    padding: 2px;
    box-shadow: inset 0 0 0 0 ${colorPalette.footer.link.hover.backGroundColor};
    color: ${colorPalette.footer.link.color};
    transition: color .3s ease-in-out, box-shadow .5s ease-in-out;
    &:hover {
        box-shadow: inset 1000px 0 0 0 ${colorPalette.footer.link.hover.backGroundColor};
        color: ${colorPalette.footer.link.hover.color};
    }
`

export const ProfileText = styled.span`
    padding: 5px;
`

export const LogoFooter = styled.img`
    width: 200px;
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
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const AboutSection = styled.div`
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