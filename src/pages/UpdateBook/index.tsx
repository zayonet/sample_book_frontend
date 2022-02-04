
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../../service/api';
import { notification } from 'antd';
import useAuth from '../../hooks/auth';


import {
    Container,
    Title,
    InpuBox,
    SubmitButton,
    CloseButton,
    Column,
    Row} from "./style"

interface IModelProps {
    user_id: number
    title: string
    price: string
    author: string
    description: string
}
const UpdateBook: React.FC = () => {
    const params = useParams();

    const { token, user } = useAuth();

    const [bookModel, setBookModel] = useState<IModelProps>({
        user_id: user.id,
        title: '',
        price: '',
        author:user.name,
        description: ''
    })

    const loadBook = useCallback(async () => {
        try {
            const Authorization = `Bearer ${token}`;
            const response = await api.get('/books/' + params.id, {
              headers: { Authorization },
            });
            
            if(user.id === response.data.user_id){
                setBookModel(response.data);

                const checkUser = () => {
                    return user.id === response.data ? user.name : 'livro não lhe pertence';
                }
            }else{
                notification["error"]({
                    message: 'Erro!',
                    duration: 4,
                    description:
                        'Desculpe! Este livro não lhe pertence, portanto não pode edita-lo',
                });
            }
        } catch (err) {
            notification["error"]({
                message: 'Erro!',
                duration: 4,
                description:
                    'Falha ao listar os livros!',
            });
        }
    }, [token, setBookModel]);
        
    useEffect(()=> { 
        loadBook()
    },[loadBook])
    
    function createBook (e: ChangeEvent<HTMLInputElement>) {
        
        setBookModel({
            ...bookModel,
            [e.target.name]: e.target.value,
        })
    }
    async function onSubmits (e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        const Authorization = `Bearer ${token}`;
        const response = await api.put('/books/'+ params.id, bookModel, {
            headers: { Authorization },
        })
        notification["success"]({
            message: 'Sucesso!',
            duration: 4,
            description:
                'Livro atualizado com sucesso',
        });    
        console.log(response)
    }
    return (
        <Container>
        <Title>EDITAR O LIVRO COM ID {params.id}</Title>
        <form onSubmit={onSubmits}>
            <Row>
                <Column>
                    <InpuBox>
                        <input 
                            type="text" 
                            name="title" 
                            required 
                            defaultValue={bookModel.title}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => createBook(e)}
                        />
                        <label>Título do Livro</label>
                    </InpuBox>
                </Column>
                <Column>
                    <InpuBox>
                        <input
                            type="text" 
                            name="price"           
                            required 
                            defaultValue={bookModel.price}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => createBook(e)}
                        />
                        <label>Preço</label>
                    </InpuBox>
                </Column>
                <Column>
                    <InpuBox>
                        <input
                            type="text" 
                            name="author"           
                            required 
                            defaultValue={user.id === bookModel.user_id ? bookModel.author : 'livro não o pertence'}
                            readOnly
                            onChange={(e: ChangeEvent<HTMLInputElement>) => createBook(e)}
                        />
                        <label>Autor</label>
                    </InpuBox>
                </Column>
                <Column>
                    <InpuBox>
                        {/* <textarea 
                        name="description" id="description" 
                        defaultValue={bookModel.description} 
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => createBook()}
                        ></textarea>  */}
                        <input name="description" id="" 
                        defaultValue={bookModel.description}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => createBook(e)}
                        />
                        <label>Descrição</label>
                    </InpuBox>
                </Column>
            </Row>
            <SubmitButton type="submit">Adicionar</SubmitButton>
            <Link to="/books">                
            <CloseButton>voltar</CloseButton></Link>
        </form>
    </Container>
    )
}

export default UpdateBook;