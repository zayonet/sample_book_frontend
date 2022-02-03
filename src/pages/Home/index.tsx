import React from "react";

import {Container, Column } from './style'
import bookImg from "../../assets/undraw_books.svg"

const Home: React.FC = () => {
    return (
        <Container>
            <Column>
                <div>
                    <h2>Bem-vindo à nossa <br /> biblioteca online</h2>
                    <p>Descubra os romances, história míticas, biografias e muito mais na nossa biblioteca. Requisite o seu próximo livro de uma forma mais fácil e em poucos passos.</p>
                </div>
                <button>Requisite já um livro</button>
            </Column>
            <Column>
                <img src={bookImg} alt="Book" />
            </Column>
        </Container>
    )
}

export default Home;