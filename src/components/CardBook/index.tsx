import React from 'react';
import { MdMoreHoriz} from 'react-icons/md';
import { notification } from 'antd';
import { Link } from 'react-router-dom';

/* import bookImg from '../../assets/books/book1.jpeg'; */

import { Container,Options } from './style';
import api from '../../service/api';
import useAuth from '../../hooks/auth';

interface IBookCardProps {
    id: number;
    title: string;
    author: string;
    amount: string;
    image: string;
    date: string;
}

const CardBook: React.FC<IBookCardProps> = ({
    id,
    title,
    author,
    amount,
    image,
    date,
}) => {
    const { token } = useAuth();

    const [show, setShow] = React.useState(false);

    const deleteBooks = async (id: string | number) => {
        try {
            const Authorization = `Bearer ${token}`;
            const response = await api.delete('/books/' + id, {
                headers: { Authorization },
            });

            console.warn(response)
            //on delete update the list of books - falta fazer

            notification["success"]({
                message: 'Success',
                duration: 4,
                description:
                    'Livro deletado com sucesso',
            });

        }catch (err) {
            notification["error"]({
                message: 'Erro!',
                duration: 4,
                description:
                    'Falha ao deletar o livro',
            });
        }
    }

    return (
        <Container>
            <div className="card">
                { 
                    show  ? (
                    <Options> 
                        <button>
                            <Link to={"/update/" + id}> Editar </Link>
                        </button>
                        <button onClick={() => deleteBooks(id)}>Excluir</button>
                    </Options>
                    )
                    : null 
                }
                <MdMoreHoriz className="more_icon" onClick={() => setShow(!show)}/>
                <img src={'http://localhost:3333/files/' +image} alt={title} />
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