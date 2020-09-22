
import User from '../models/User';
import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs'; // importamos a função hash
import AppError from '../errors/AppError';

interface Request {
    name: string,
    email: string,
    password: string
}

class CreateUserService {
    public async excute({name, email, password}: Request): Promise<User> { // definimos o retorno do metodo como o model User
       const usersRepository  = getRepository(User);
        // Verifica se o user tem o email recebido
       const checkUserExists = await usersRepository.findOne({
           where: {email},
       });

       if(checkUserExists) {
           throw new AppError('Email addres already used.'); // vai "jogar" um erro.
       }
       // Criamos uma variavel, que ira receber o metodo hash(senha, salt(numero ou uma string))
       // O salt é como se fosse como a criptografia sera feita, definindo um numero ele gerara uma automaticamente baseada na quantidade do numero
       const hashedPassword = await hash(password, 8);
       const user = usersRepository.create({ // Criamos uma instancia com os dados no banco de dados
            name,
            email,
            password: hashedPassword
        });

       await usersRepository.save(user); // Salvamos os dados no banco de dados

       return user
    }
}

export default CreateUserService;