import React, { useCallback, useRef } from 'react';
import { Container, Content, Background } from './styles';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import Button from '../../Components/button';
import Input from '../../Components/input'
import { Form } from '@unform/web'; // Importa o componente Form da biblioteca de unform
import * as Yup from 'yup'; // Importa a biblioteca para realizar a validação de formulario, e armazena dentro de uma variavel chamada Yup
import { FormHandles } from '@unform/core';
import getValidationErrors from '../../utils/getValidationErrors';
import { Link, useHistory } from 'react-router-dom';
 
const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const history = useHistory();

    const handleSubmit = useCallback(async (data: object) => {
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
                password: Yup.string().min(6, 'Minimo 6 digitos'),
            });
            await schema.validate(data, {
                abortEarly: false,
            });
            history.push('/dashboard');
            console.log(data)
        } catch(err) {
            const errors = getValidationErrors(err);
            formRef.current?.setErrors(errors);
        }
    }, []);
    
    return(
    <Container>
        <Background/>
        <Content>
            <h1> E-VENTO </h1>

            <Form ref={formRef} onSubmit={handleSubmit}>
                <h1> Faça seu cadastro </h1>
                <Input name='name' icon={FiUser} placeholder='Nome' />
                <Input name='email' icon={FiMail} placeholder='Email' />
                <Input name='password' icon={FiLock} placeholder='Senha' type='password'/>
                <Button type='submit'> Cadastrar </Button>

                <Link to="/"> <FiArrowLeft/> Voltar para logon </Link>
            </Form>
        </Content>
        
    </Container>
);}

export default SignUp;