import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>; // O type tem a mesma função que a interface, porem é usado para quando voce nao quer criar novas propriedades e só herda de alguma coisa.

// O children da tag vai para a variavel children, e o restante das propriedades vai para variavel rest.
const Button: React.FC<ButtonProps> = ({children, ...rest}) => (
    <Container type="button" {...rest}> { children } </Container>
);


export default Button;