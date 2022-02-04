import React from "react";
import { useNavigate } from "react-router-dom";

import {Container, Column } from './style'
import bookImg from "../../assets/undraw_books.svg"

const Home: React.FC = () => {
    let navigate = useNavigate();

    const redirect = () => {
        navigate('/books')
    }
    
    return (
        <Container>
            <Column>
                <div>
                    <h2>Bem-vindo à nossa  biblioteca <br />online</h2>
                    <p>Descubra os romances, história míticas, biografias e muito mais na nossa biblioteca. Requisite o seu próximo livro de uma forma mais fácil e em poucos passos.</p>
                </div>
                <button onClick={redirect}>Requisite já um livro</button>
            </Column>
            <Column>
                <img src={bookImg} alt="Book"/>
            </Column>
        </Container>
    )
}

export default Home;