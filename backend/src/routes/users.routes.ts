import { Router, request } from 'express';
import CreateUserService from '../services/CreateUserService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRoutes = Router(); // Define a variavel que vai inicializar o router.


const userService = new CreateUserService();
usersRoutes.post('/', async (request, response) => {
        const { name, email, password } = request.body;
        const user = await userService.excute({name, email, password}); // passa name, email and  password para função execute do service.
        delete user.password;
        return response.json(user);
});

export default usersRoutes;
