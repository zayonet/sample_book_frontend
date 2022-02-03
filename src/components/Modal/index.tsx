import React, { ChangeEvent, FormEvent, useCallback, useState } from "react"

import api from "../../service/api"
import Dropzone from "../Dropzone"

import {
  Container,
  Title,
  InpuBox,
  SubmitButton,
  CloseButton,
  Column,
  Row} from "./style"

interface ICloseButtonProps {
  close?: React.MouseEventHandler<HTMLSpanElement> | undefined,
  //onChange(event: React.ChangeEvent<HTMLInputElement>): void | undefined,
}
interface IModelProps {
    user_id: number
    title: string
    price: string
    author: string
    description: string
}
const Modal: React.FC<ICloseButtonProps> = ({close}) => {
    const [fileSelected, setFileSelected] = React.useState<File>() // also tried <string | Blob>
    
    const [model, setModel] = useState<IModelProps>({
        user_id: 1,
        title: '',
        price: '',
        author:'',
        description: ''
    }) 

    const [selectedImage, setSelectedImage] = useState<File>();

    const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        //console.log(event.target.name, event.target.value);
        const { name, value } = event.target;
        setModel({...model, [name]: value });
    }, [model]);

    function createBook (e: ChangeEvent<HTMLInputElement>) {
        
        setModel({
            ...model,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = useCallback(async (event: FormEvent) => {
        event.preventDefault();

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

        await api.post('/books', data);

        alert('Estabelecimento cadastrado com sucesso!');
        console.log(data);
        //history.push('/');
    }, [model, history, selectedImage]);


    const uploadFile = function (e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (fileSelected) {
            const formData = new FormData();
            formData.append('title', model.title)
            formData.append('price', model.price)
            formData.append('author', model.author)
            formData.append('description', model.description)
            formData.append("image", fileSelected, fileSelected.name);

            api
            .post('/books', formData)
            .then((res) => {
                alert("File Upload success");
                console.log(res)
            })
            .catch((err) => alert("File Upload Error"));
        }

    };

    /*  async function onSubmit (e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        const response = await api.post('/books', model)

        console.log(response)
    } */
    async function onSubmits (e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        const response = await api.post('/books', model)

        console.log(response)
    }

    return (
        <Container>
            <Title>Adicionar Livros</Title>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <Row>
                    <Column>
                        <InpuBox>
                            <input 
                                type="text" 
                                name="title" 
                                required 
                                /* onChange={(e: ChangeEvent<HTMLInputElement>) => createBook(e)} */
                                onChange={handleInputChange}
                            />
                            <label>Título do Livro</label>
                            {/* <input type="number" name="reader_id"   onChange={handleInputChange}/>
                            <input type="number" name="user_idIndex	"  onChange={handleInputChange}/> */}
                        </InpuBox>
                    </Column>
                    <Column>
                        <InpuBox>
                            <input
                                type="text" 
                                name="price"           
                                /* onChange={(e: ChangeEvent<HTMLInputElement>) => createBook(e)} */
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
                                /* onChange={(e: ChangeEvent<HTMLInputElement>) => createBook(e)} */
                                required 
                                onChange={handleInputChange}
                            />
                            <label>Autor</label>
                        </InpuBox>
                    </Column>
                    {/* <Column>
                        <InpuBox>
                            <input type="date" name="created_at"  />
                            <label>Data de Lançamento</label>
                        </InpuBox>
                    </Column> */}
                    <Column>
                        <InpuBox>
                            <input name="description" id="" 
                            /* onChange={(e: ChangeEvent<HTMLInputElement>) => createBook(e)}  */
                            onChange={handleInputChange}
                            />
                            <label>Descrição</label>
                        </InpuBox>
                    </Column>
                </Row>
                <Dropzone onImageUploaded={setSelectedImage} />
                <SubmitButton type="submit">
                    {/* <span></span>
                    <span></span>
                    <span></span>
                    <span></span> */}
                    Adicionar
                </SubmitButton>
                
                <CloseButton onClick={close}>Fechar</CloseButton>
            </form>
        </Container>
    )
}
export default Modal

