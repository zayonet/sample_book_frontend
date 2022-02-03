import React from "react"

import {Container} from "./style"

import bookImg from "../../assets/books/book1.jpeg"

import {MdMoreHoriz} from "react-icons/md"

interface IBookCardProps {
    title: string;
    author: string;
    amount: string;
    date: string;
}

const CardBook: React.FC<IBookCardProps> = ({
    title,
    author,
    amount,
    date

}) => {
    return (
        <Container>
            <div className="card">
                <MdMoreHoriz className="more_icon"/>
                <img src={bookImg} alt={title} />
                <h3>{title}</h3>
                <p className="author">{author}</p>
                <small>{amount} - {date}</small>
                <div className="card-footer">
                    <button>Requisitar</button>
                </div>
            </div>
        </Container>
    )
}

export default CardBook