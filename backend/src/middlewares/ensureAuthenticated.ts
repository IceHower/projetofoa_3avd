import {Request, Response, NextFunction} from 'express'
import {verify} from 'jsonwebtoken';
import authConfig from '../config/auth'; //Importa os arquivos de configuração
import AppError from '../errors/AppError';

interface TokenPayload { // Esse é o payload do JWT.
    iat: number;
    exp: number;
    sub: string;
}

export default function ensureAuthenticated(request: Request, response: Response, next: NextFunction): void {
    //validação do token jtw
    const authHeader = request.headers.authorization;

    if(!authHeader) {
        throw new AppError('jwt is missing!', 401);
    }


    // O formato do token é Bearer + token
    // Usando o metodo split ele vai separar pelo espaço em um array com 2 posições
    // No JS podemos usar na desestruturação podemos colocar uma virgula antes, só para
    // poder pegar só elemento que queremos.
    const [, token] = authHeader.split(' ');
    try {
        const decoded = verify(token, authConfig.jwt.secret);
        const { sub } = decoded as TokenPayload; // desestrutura e pega a variavel sub, e diz que a decoded e do tipo TokenPayload.
        request.user = {
            id: sub,
        }
        return next();
    } catch(err) {
        throw new AppError('Invalid JWT token!', 401);
    }

}