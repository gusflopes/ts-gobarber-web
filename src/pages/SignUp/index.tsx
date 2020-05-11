import React from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

export const SignUp: React.FC = () => {
  return (
    <Container>
      <Background />

      <Content>
        <img src={logoImg} alt="GoBarber" />
        <form>
          <h1>Faça seu cadastro</h1>
          <Input type="text" icon={FiUser} placeholder="Nome" name="name" />
          <Input type="text" icon={FiMail} placeholder="E-mail" name="email" />
          <Input
            type="password"
            icon={FiLock}
            placeholder="Senha"
            name="password"
          />

          <Button type="submit">Cadastrar</Button>
        </form>

        <a href="home">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
