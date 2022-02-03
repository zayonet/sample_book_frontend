import React from 'react';
import { GiBookshelf} from 'react-icons/gi'
import { ImBooks} from "react-icons/im";
import { SiBookstack } from 'react-icons/si'
import { Container, EntryCard, EntryCardItem, } from './styles';
import logo from '../../assets/undraw_books.svg'

const Start: React.FC = () => {
  return (
        <Container> 
            <img src={logo} alt="logo" />
            <EntryCard>
                <EntryCardItem>
                <GiBookshelf size={50} />
                <span>Entrar como Escritor</span>
                </EntryCardItem>
                <EntryCardItem
                color="#fff"
                background="#111111"
                >
                <ImBooks size={50} />
                <span>Entrar como Leitor</span>
                </EntryCardItem>
            </EntryCard>
        </Container>
    );
}

export default Start;