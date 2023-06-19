import { styled } from 'styled-components'
import { responsive } from './styles'

/** Table ================================================================================================*/
export const FooterArticle = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const FooterSection = styled.section`
    align-items: center;
`

export const Table = styled.table`
    border: 1px solid white;
    border-collapse: collapse;
`

export const Td = styled.td`
    border: 1px solid white;
`

export const A = styled.a`
    display: block;
    box-shadow: inset 0 0 0 0 #54b3d6;
    color: #54b3d6;
    transition: color .3s ease-in-out, box-shadow .5s ease-in-out;
    &:hover {
        box-shadow: inset 500px 0 0 0 #54b3d6;
        color: white;
    }
`

export const Hr = styled.hr`
    width: 100%;
`

/** About ================================================================================================*/
export const AboutProject = styled.div`

`

/** Copyright ================================================================================================*/
export const Copyright = styled.span`
    display: block;
    text-align: center;
`