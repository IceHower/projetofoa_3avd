import Event from '../models/Event';
import { getRepository } from 'typeorm';
import uploadConfig from '../config/upload';
import User from '../models/User';
import path from 'path';
import fs from 'fs';
import AppError from '../errors/AppError';

interface RequestDTO {
    user_id: string;
    nome: string;
    local: string;
    comentario: string;
    image: string;
}

class CreateEventService {
    public async execute({user_id, nome, local, comentario, image}: RequestDTO): Promise<Event> {
        const eventRepository = getRepository(Event);
        const event = eventRepository.create({
            user_id,
            nome,
            local,
            comentario,
            image,
            likes: 0,
            dislikes: 0
        });

        eventRepository.save(event)

        return event;

    }
}

export default CreateEventService;