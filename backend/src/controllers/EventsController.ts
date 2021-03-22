import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Event from '../models/Event';
import * as Yup from 'yup';

export default {

    async create(request: Request, response: Response) {
        
        const events = request.body
        console.log(events);

        const eventsRepository = getRepository(Event);
        
        const schema = Yup.object().shape({
            events: Yup.array(Yup.object().shape({
                eventDescription: Yup.string().required('O campo acontecimento é obrigatório')
                })
            )
        });

        await schema.validate(events, {
            abortEarly: false,
        })
        
        events.map( async (event: Event) => { 
            eventsRepository.create(event)
            await eventsRepository.save(event);
        });

        return response.status(201).json({ success: true,});
    }
}