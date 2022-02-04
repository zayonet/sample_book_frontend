import React from 'react'
import { Link } from "react-router-dom";

import { Container, MenuContainer, MenuItemLink, Dropdown } from './style'

import { SiBookstack, SiGooglescholar } from 'react-icons/si'

import { FaUserCircle, FaChevronDown} from "react-icons/fa";

import flag from "../../../assets/flags/001-portugal.png"
import useAuth from '../../../hooks/auth';


const Menu: React.FC = () => {
    const { user, signIn, signOut } = useAuth()
    return (
        <Container>
            <MenuContainer>
                <MenuItemLink><Link to="/" className='linkNavigator'>Home</Link></MenuItemLink>
                <MenuItemLink><Link to="/books" className='linkNavigator'>Books</Link></MenuItemLink>
                {
                    user ? 
                        <Dropdown>
                            <MenuItemLink className="dropbtn"> <FaUserCircle className='avatar' />{user.name}</MenuItemLink>
                            <div className="dropdown-content">
                                <MenuItemLink><Link to="/" onClick={() => signOut()} className='linkNavigator'>
                                    <SiGooglescholar />
                                    <span>Sair</span></Link>
                                </MenuItemLink>
                            </div>
                        </Dropdown>
                        :
                        <Dropdown>
                            <MenuItemLink className="dropbtn">Start</MenuItemLink>
                            <div className="dropdown-content">
                                <MenuItemLink><Link to="/sigin" className='linkNavigator'>
                                    <SiGooglescholar />
                                    <span>Entrar/Escritor</span></Link>
                                </MenuItemLink>
                            </div>
                        </Dropdown>
                        
                }
                <MenuItemLink><Link to="/" className='linkNavigator'>PT <img src={flag} alt="flag" /></Link></MenuItemLink>
            </MenuContainer>
        </Container>
    )
}

export default Menu