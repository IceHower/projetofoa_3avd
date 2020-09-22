import { Router } from 'express'
import CreateSessionService from '../services/CreateSessionService';
const sessionsRouter = Router();

const sessionUser = new CreateSessionService(); //instancia o session service na variavel.

sessionsRouter.post('/', async(request, response) => {
        const {email, password} = request.body; // Pega o email e a senha do body.

        const { user, token } = await sessionUser.execute({
            email,
            password
        });

        delete user.password;
        return response.json({ user, token });

});

export default sessionsRouter;