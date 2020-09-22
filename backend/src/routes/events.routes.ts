import { Router, Response, Request } from 'express'; // Importa o router, Response e request para definir os tipos do paramentro
import CreateEventService from '../services/CreateEventService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import {getRepository} from 'typeorm'
import Event from '../models/Event';
import multer from 'multer';
import uploadConfig from '../config/upload';
import AppError from '../errors/AppError';

const eventsRouter = Router(); // define uma variavel para inicializar o router
const upload = multer(uploadConfig); // Define a variavel que vai inicializar o multer passando como parametro a upload config

eventsRouter.use(ensureAuthenticated) // Aplica o middleware em todas as rotas de events.

eventsRouter.post('/', upload.single('image'), async(request : Request, response : Response) => { // Metodo post da rota events que retorna um Json
        const user_id  = request.user.id;
        const { nome, local, comentario } = request.body;
        const image = `http://192.168.1.74:3333/files/${request.file.filename}`; // MUDAR CONFORME O PC

        const createEvent = new CreateEventService(); 
        const event = await createEvent.execute({user_id, nome, local, comentario, image}); 
        return response.json(event); // retorna um json com as informações cadastradas


});

eventsRouter.get('/', async (request: Request, response: Response) => { // Lista os itens cadastrados
    const eventsRepository = getRepository(Event);
    const event = await eventsRepository.find(); // inicializa uma variavel passando a função list do EventsRepository.

    return response.json(event); // retorna um json com o resultado obtido.
});

// LIKES E DISLIKES

eventsRouter.post('/likes/:id', async(request: Request, response: Response) => {
        const {id} = request.params;
        const eventsRepository = getRepository(Event);
        const event = await eventsRepository.findOne(id);
        event.likes =  event.likes + 1;
        await eventsRepository.save(event);

        return response.json(event);
});

eventsRouter.post('/dislikes/:id', async(request: Request, response: Response) => {
    const {id} = request.params;
    const eventsRepository = getRepository(Event);
    const event = await eventsRepository.findOne(id);
    event.dislikes =  event.dislikes + 1;
    await eventsRepository.save(event);

    return response.json(event);
});

//ROTA DE DELETAR

eventsRouter.delete('/:id', async(request: Request, response: Response) => {
    const {id} = request.params;
    const user_id = request.user.id;
    const eventsRepository = getRepository(Event);
    const event = await eventsRepository.findOne({ id: id, user_id: user_id});
    if(!event) {
        throw new AppError('users doesnt have permission to delete this event!', 400);
    }
    eventsRepository.remove(event);
    response.json({ok: true});
});
export default eventsRouter; // exporta a variavel