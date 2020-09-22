import React from 'react';
import { Container, Content, Background } from './styles';
import { FiLogIn } from 'react-icons/fi';

const Login: React.FC = () => (
    <Container>
        <Content>
            <h1> E-VENTO </h1>

            <form>
                <h1> Faça seu logon </h1>
                <input placeholder='Email' />
                <input placeholder='Senha' type='password'/>
                <button type='submit'> Entrar </button>

                <a href="#"> <FiLogIn/> Criar conta </a>
            </form>
        </Content>
        <Background/>
    </Container>
);

export default Login;