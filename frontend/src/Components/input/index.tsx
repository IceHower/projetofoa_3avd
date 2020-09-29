import React, { InputHTMLAttributes, useEffect, useRef, useState, useCallback } from 'react';
import { Container, Error } from './styles';
import { IconBaseProps } from 'react-icons'; // IMPORTA as propriedades base do icones para passarmos como parametro.
import { FiAlertCircle } from 'react-icons/fi'
import { useField } from '@unform/core';
import  Tooltip   from '../tooltip'


// Cria uma interface e extende com as propriedades que o input ja tem no HTML normalmente.
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string; // Como o name geralmente nao e obrigatorio no html normalmente, isso serve para sobrescrever e dizer que é obrigatorio
    icon?: React.ComponentType<IconBaseProps>; // define as propriedades Base do react icons como parametro, para podermos acessar ela no componente logo abaixo.
}
// Depois passamos a interface como parametro no React.FC para poder receber acesso as propriedades que o input pode ter.
const Input: React.FC<InputProps> = ({name, icon: Icon, ...rest}) => {
// Faz uma referencia ao DOM do input, podendo acessar sem a necessidade de armazenar em um estado.
// Lembrando q dentro da ref, é na propriedade current que se encontra o input.
// path: é aonde o unform vai buscar dentro da referencia o valor do input.
const inputRef = useRef<HTMLInputElement>(null); 
const { fieldName, defaultValue, error, registerField} = useField(name);
const [isFocused, setIsFocused] = useState(false);
const [isFilled, setIsFilled] = useState(false);

const handleInputBlur = useCallback(() => {
        setIsFocused(false);
        setIsFilled(false);

        if(inputRef.current?.value) {
            setIsFilled(true);
        }
}, []);

useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value' // seria o mesmo que fazer document.querySelector('input').value
        });
    }, [fieldName, registerField]);
return (
    <Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
        {Icon && <Icon size={20}/>}
        <input onFocus={()=> setIsFocused(true)} onBlur={() => handleInputBlur()} ref={inputRef} defaultValue={defaultValue} {...rest}/>
        {error && <Error title={error}>
                    <FiAlertCircle color='#fa1920' size={20}/>
                  </Error>}
    </Container>
);}


export default Input;