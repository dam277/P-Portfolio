import Nav from './Nav'
import Lang from './Lang'

import logo from '../../resources/images/logo.png'

import { Title, Logo, TitleContainer } from '../../resources/css/headerStyle';

function Header()
{
    return(
        <header>
            <TitleContainer>
                <Title>Portfolio - Damien Loup</Title>  
                <Logo src={logo} />
            </TitleContainer>
            <Nav />
            <Lang />
        </header>
    )
}

export default Header;