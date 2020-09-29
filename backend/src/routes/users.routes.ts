import { Router, request } from 'express';
import CreateUserService from '../services/CreateUserService';
import {getRepository} from 'typeorm'
import User from '../models/User';
const usersRoutes = Router(); // Define a variavel que vai inicializar o router.


const userService = new CreateUserService();
usersRoutes.post('/', async (request, response) => {
        const { name, email, password } = request.body;
        const user = await userService.excute({name, email, password}); // passa name, email and  password para função execute do service.
        delete user.password;
        return response.json(user);
});

usersRoutes.get('/', async (request, response) => {
        const userRepository = getRepository(User);
        const user = await userRepository.find();

        return response.json(user);
});

export default usersRoutes;
