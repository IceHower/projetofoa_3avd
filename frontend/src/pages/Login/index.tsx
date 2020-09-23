import React from 'react';
import { Container, Content, Background } from './styles';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import Button from '../../Components/button';
import Input from '../../Components/input'

const Login: React.FC = () => (
    <Container>
        <Content>
            <h1> E-VENTO </h1>

            <form>
                <h1> Faça seu logon </h1>
                <Input name='email' icon={FiMail} placeholder='Email' />
                <Input name='senha' icon={FiLock} placeholder='Senha' type='password'/>
                <Button type='submit'> Entrar </Button>

                <a href="#"> <FiLogIn/> Criar conta </a>
            </form>
        </Content>
        <Background/>
    </Container>
);

export default Login;