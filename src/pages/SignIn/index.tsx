import React, { useRef, useCallback, useContext } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { AuthContext } from '../../context/AuthContex';
import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

interface SignInFormData {
  email: string;
  password: string;
}

export const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { user, signIn } = useContext(AuthContext);

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email é obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha é obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        signIn({ email: data.email, password: data.password });
      } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
        console.error(err);
      }
    },
    [signIn],
  );

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />
        <Form onSubmit={handleSubmit} ref={formRef}>
          <h1>Faça seu logon</h1>
          <Input type="text" icon={FiMail} placeholder="E-mail" name="email" />
          <Input
            type="password"
            icon={FiLock}
            placeholder="Senha"
            name="password"
          />

          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </Form>

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
