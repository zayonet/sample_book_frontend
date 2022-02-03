import React from 'react';
import { Link } from 'react-router-dom';
import { FaKey } from 'react-icons/fa';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, Form, FormActions } from './style';

const LoginAsReader: React.FC = () => {
  return (
    <Container>
      <Content>
        <Form>
          <h1>Login para Leitor</h1>
          <Input icon={FaKey} placeholder="Chave de acesso" type="text" />
          <Button>Entrar</Button>
          <FormActions>
            <Link to="/">Voltar</Link>
          </FormActions>
        </Form>
      </Content>
    </Container>
  );
};

export default LoginAsReader;