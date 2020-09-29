import {ValidationError} from 'yup';

interface Errors {
    [key: string]: string; //Diz que na parte do lado esquerdo pode ser qualquer coisa que seja uma string.
}

export default function getValidationErros(err: ValidationError):Errors  { //Define que ira retornar a interface Errors
    const validationErros: Errors = {};
    //Vamos varrer o array de inner, e para cada erro vamos criar uma propriedade que recebe o path('nome') e o a mensagem de erro.
    err.inner.forEach(error => {
        validationErros[error.path] = error.message;
    });
    return validationErros; // retorna o objeto
}