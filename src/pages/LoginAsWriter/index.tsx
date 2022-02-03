import React, { ChangeEvent, useCallback, useState, } from 'react';

import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { notification } from 'antd';

import { Container, Content, Form, FormActions  } from './style';

import ICredentiaslWriter from '../../interface/ICredentiaslWriter';

// import api from '../../service/api';

import Button from '../../components/Button';
import Input from '../../components/Input';
import useAuth from '../../hooks/auth';

const LoginAsWriter: React.FC = () => {
    //const {user, signIn} = useContext(AuthContext)
    const {user, signIn} = useAuth()
    const [model, setModel] = useState<ICredentiaslWriter>({
        email: '',
        password: '',
    });


    const changeValuesModel = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
        setModel({
        ...model,
        [e.target.name]: e.target.value,
        });
    },
    [model],
    );
    
    const onSubmit = useCallback(
    async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(model)
        try {
        await signIn(model);
        notification["success"]({
            message: 'Sucesso!',
            duration: 0,
            description:
                'Utilizador autenticado com sucesso!',
            });
        } catch (err) {
        notification["error"]({
            message: 'Erro!',
            duration: 0,
            description:
                'Erro ao autenticar no utilizador!',
            });
        }
    },
    [model, signIn],
    ); 

    return (
        <Container>
            <Content>
                <Form onSubmit={onSubmit}>
                    <h1>Login para Escritor</h1>
                    <Input
                        icon={FaEnvelope}
                        placeholder="E-mail"
                        type="email"
                        name="email"
                        value={model.email}
                        onChange={changeValuesModel}
                    />
                    <Input
                        icon={FaLock}
                        placeholder="Senha"
                        isPassword
                        type="password"
                        name="password"
                        value={model.password}
                        onChange={changeValuesModel}
                    />
                    <Button type="submit">Entrar</Button>
                    <FormActions>
                        <Link to="/signup/writer">Faça seu cadastro</Link>
                        <Link to="/">Voltar</Link>
                    </FormActions>
                </Form>
            </Content>
        </Container>
        );
}

export default LoginAsWriter;