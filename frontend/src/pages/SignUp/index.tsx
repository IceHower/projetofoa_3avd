import React from 'react';
import { Container, Content, Background } from './styles';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import Button from '../../Components/button';
import Input from '../../Components/input'
import { Form } from '@unform/web'; // Importa o componente Form da biblioteca de unform

const SignUp: React.FC = () => {
    function handleSubmit(data: object): void {
        console.log(data);
    }
    
    return(
    <Container>
        <Background/>
        <Content>
            <h1> E-VENTO </h1>

            <Form onSubmit={handleSubmit}>
                <h1> Faça seu cadastro </h1>
                <Input name='nome' icon={FiUser} placeholder='Nome' />
                <Input name='email' icon={FiMail} placeholder='Email' />
                <Input name='senha' icon={FiLock} placeholder='Senha' type='password'/>
                <Button type='submit'> Cadastrar </Button>

                <a href="#"> <FiArrowLeft/> Voltar para logon </a>
            </Form>
        </Content>
        
    </Container>
);}

export default SignUp;