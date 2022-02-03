import React from 'react'
import { Link } from "react-router-dom";

import { Container, MenuContainer, MenuItemLink, Dropdown } from './style'

import { SiBookstack, SiGooglescholar } from 'react-icons/si'

import { 
    MdKeyboardArrowDown
} from "react-icons/md";

import flag from "../../../assets/flags/001-portugal.png"


const Menu: React.FC = () => {
    return (
        <Container>
            <MenuContainer>
                <MenuItemLink><Link to="/" className='linkNavigator'>Home</Link></MenuItemLink>
                <MenuItemLink><Link to="/books" className='linkNavigator'>Books</Link></MenuItemLink>
                <Dropdown>
                    <MenuItemLink className="dropbtn">Start</MenuItemLink>
                    <div className="dropdown-content">
                        <MenuItemLink><Link to="/login/writer" className='linkNavigator'>
                            <SiGooglescholar />
                            <span>Entrar/Escritor</span></Link>
                        </MenuItemLink>
                        <MenuItemLink>
                            <Link to="/login/reader" className='linkNavigator'> 
                                <SiBookstack />
                                <span>Entrar/Leitor</span>
                            </Link>
                        </MenuItemLink>
                    </div>
                </Dropdown>
                <MenuItemLink><MdKeyboardArrowDown /><Link to="/" className='linkNavigator'>PT <img src={flag} alt="flag" /></Link></MenuItemLink>
            </MenuContainer>
        </Container>
    )
}

export default Menu