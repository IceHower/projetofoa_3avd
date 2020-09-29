import React, {useRef, useCallback} from 'react';
import { Container, Content, Background } from './styles';
import { FiLogIn, FiArrowRight, FiMail, FiLock } from 'react-icons/fi';
import Button from '../../Components/button';
import Input from '../../Components/input'
import {Form} from  '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';
import { FormHandles } from '@unform/core';
import { Link, useHistory } from 'react-router-dom';

const Login: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const history = useHistory();

    const handleSubmit = useCallback(async (data: object) => {
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
                password: Yup.string().required('Senha obrigatória'),
            })
            await schema.validate(data, {
                abortEarly: false,
            });
            history.push('/dashboard');
            console.log(data);
        } catch(err) {
            const errors = getValidationErrors(err);
            formRef.current?.setErrors(errors);
        }
    }, []);
    
return (
    <Container>
        <Content>
            <h1> E-VENTO </h1>

            <Form ref={formRef} onSubmit={handleSubmit}>
                <h1> Faça seu logon </h1>
                <Input name='email' icon={FiMail} placeholder='Email' />
                <Input name='password' icon={FiLock} placeholder='Senha' type='password'/>
                <Button type='submit'> Entrar </Button>
                <Link to="/cadastro"> <FiLogIn/> Criar conta </Link>
            </Form>
        </Content>
        <Background/>
    </Container>
)};

export default Login;