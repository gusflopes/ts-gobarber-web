import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';

export const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />
        <form>
          <h1>Faça seu logon</h1>
          <input type="text" placeholder="E-mail" name="email" />
          <input type="password" placeholder="Senha" name="password" />

          <button type="submit">Entrar</button>

          <a href="forgto">Esqueci minha senha</a>
        </form>

        <a href="home">
          <FiLogIn />
          Criar Conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
