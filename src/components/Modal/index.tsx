
import React, { ChangeEvent, FormEvent, useCallback, useState } from "react"
import useAuth from "../../hooks/auth"

import api from "../../service/api"
import Dropzone from "../Dropzone"
import { notification } from "antd"

import {
  Container,
  Title,
  InpuBox,
  SubmitButton,
  CloseButton,
  Column,
  Row} from "./style"

interface ICloseButtonProps {
  close?: React.MouseEventHandler<HTMLSpanElement> | undefined
}
interface IModelProps {
    user_id: number
    title: string
    price: string
    author: string
    description: string
}
const Modal: React.FC<ICloseButtonProps> = ({close}) => {

    const { token, user } = useAuth();
    
    const [model, setModel] = useState<IModelProps>({
        user_id: user.id,
        title: '',
        price: '',
        author:'',
        description: ''
    }) 

    const [selectedImage, setSelectedImage] = useState<File>();

    const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setModel({...model, [name]: value });
    }, [model]);

    const handleSubmit = useCallback(async (event: FormEvent) => {
        event.preventDefault();
        const Authorization = `Bearer ${token}`;

        const {user_id, title, price, author, description} = model;

        const data = new FormData();

        data.append('user_id', String(user_id));
        data.append('title', title);
        data.append('price', price);
        data.append('author', author);
        data.append('description',description);
        if (selectedImage) {
            data.append('image', selectedImage);
        }

        await api.post('/books', data, {
            headers: {
                Authorization,
                "Content-type": "multipart/form-data",
            },                    
        });
        
        notification["success"]({
            message: 'Sucesso!',
            duration: 4,
            description:
                'Livro registado com sucesso',
        });    

    }, [model, selectedImage]);


    return (
        <Container>
            <Title>ADICIONAR NOVO LIVRO</Title>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <Row>
                    <Column>
                        <InpuBox>
                            <input 
                                type="text" 
                                name="title" 
                                required 
                                onChange={handleInputChange}
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
                                onChange={handleInputChange}
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
                                onChange={handleInputChange}
                            />
                            <label>Autor</label>
                        </InpuBox>
                    </Column>
                    <Column>
                        <InpuBox>
                            <input name="description" id="" 
                            onChange={handleInputChange}
                            />
                            <label>Descrição</label>
                        </InpuBox>
                    </Column>
                </Row>
                <Dropzone onImageUploaded={setSelectedImage} />
                <SubmitButton type="submit">Adicionar</SubmitButton>                
                <CloseButton onClick={close}>Fechar</CloseButton>
            </form>
        </Container>
    )
}
export default Modal

