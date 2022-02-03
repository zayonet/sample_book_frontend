import React, { ChangeEvent, useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { notification } from 'antd';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, Form, FormActions } from './style';
import IWriterForm from '../../interface/writerForm';
import api from '../../service/api';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [model, setModel] = useState<IWriterForm>({
    name: '',
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
        await api.post('/users', model);
        notification["success"]({
            message: 'Sucesso!',
            duration: 0,
            description:
              'Utilizador registado com sucesso!',
          });
          navigate('login/writer');
      } catch (err) {
        notification["error"]({
            message: 'Erro!',
            duration: 0,
            description:
              'Erro ao registar no utilizador!',
          });
      }
    },
    [model, navigate],
  ); 

  return (
    <Container>
      <Content>
        <Form onSubmit={onSubmit}>
          <h1>Cadastrar novo Escritor</h1>
          <Input
            icon={FaUser}
            placeholder="Nome"
            type="text"
            name="name"
            value={model.name}
            onChange={changeValuesModel}
          />
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
          <Button type="submit">Cadastrar</Button>
          <FormActions>
            <Link to="login/writer">Já tenho conta</Link>
            <Link to="login/writer">Voltar</Link>
          </FormActions>
        </Form>
      </Content>
    </Container>
  );
};

export default SignUp;