import React, { useCallback, useEffect, useState } from "react";

import { Container, BookContainer } from './style'

import SeachBox from "../../components/SeachBox"
import Book from "../../components/CardBook"
import AddBook from "../../components/AddBook"

//import MyBooks from "../../database/books"
import api from "../../service/api"

import formatCurrency from '../../utils/formatCurrency'
import formatDate from '../../utils/formatDate'
import useAuth from "../../hooks/auth";
import { notification } from "antd";

interface IData {
    id: number;
    title : string;
    author: string;
    amount: string;
    image: string;  
    created_at: string
}

const Books: React.FC = () => {
    const [data, setData] = useState<IData[]>([])
    const [wordEntered, setWordEntered] = useState("");
    
    const { token } = useAuth();

    const loadBooks = useCallback(async () => {
        try {
          const Authorization = `Bearer ${token}`;
          const response = await api.get('/books/books', {
            headers: { Authorization },
          });
          const formatedDate = response.data.map((item: { id: number, title: string; author: string; price: string; image: string; created_at: string; }) => {
            return {
                id : item.id,
                title : item.title,
                author: item.author,
                image: item.image,
                amount: formatCurrency(Number(item.price)),
                created_at: formatDate(item.created_at)
            }
        })
          setData(formatedDate);
        } catch (err) {
            notification["error"]({
                message: 'Erro!',
                duration: 4,
                description:
                    'Falha ao listar os livros!',
            });
        }
      }, [token]);

    useEffect(()=> { 
        loadBooks()
    },[loadBooks])
    
    const handleFilter = (word:string) => {
        const searchWord = word
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
          return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });
    
        if (searchWord === "") {
            setData(data);
            //setData(formatedDate)
        } else {
            setData(newFilter);
            //console.log(newFilter)
        }
    }

    return (
        <Container>
            
            <h1>A nossa biblioteca</h1>
            <SeachBox 
                wordEntered={wordEntered} 
                placeholder="Pesquise um livro" 
                onChange={(e) => handleFilter(e.target.value)} 
            />
            <BookContainer>
                <AddBook />
                { 
                    data.map(item => (
                        <Book 
                            key={item.id} 
                            id={item.id}
                            title={item.title} 
                            author={item.author}  
                            image={item.image}  
                            amount={item.amount}  
                            date={item.created_at}
                        />
                    ))
                }
            </BookContainer>
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo natus sit commodi delectus voluptatem adipisci dolorum, in a, qui impedit minus enim nobis esse, facilis et possimus hic magnam. Eum.</p>

        </Container>
    )
}

export default Books;