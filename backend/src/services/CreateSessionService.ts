import {getRepository} from 'typeorm';
import User from '../models/User';
import { compare } from 'bcryptjs'; // importa o metodo compare.
import { sign } from 'jsonwebtoken';
import authConfig from '../config/auth';
import AppError from '../errors/AppError';

interface Request {
    email: string,
    password: string,
}

class CreateSessionService {
    public async execute({email, password}: Request): Promise<{user: User, token: string}> {
        const usersRepository = getRepository(User);
        const user = await usersRepository.findOne({
            where: {email}
        }); // procura um usuario que bate com o email que ele está recebendo.

        if(!user) {
            throw new AppError('Incorret email/password combination.', 401);
        }
        // vai comparar a senha recebida com a criptografada dentro do banco de dados
        // Retorna true, caso a comparação seja valida.
        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch) {
            throw new AppError('Incorret email/password combination.', 401);
        }

        //Passou até aqui usuario autenticado :)
        const token = sign({}, authConfig.jwt.secret , {
            subject: user.id,
            expiresIn: authConfig.jwt.expireIn
        }); // definimos as configurações do token

        return {
            user,
            token
        }

    }
}

export default CreateSessionService;