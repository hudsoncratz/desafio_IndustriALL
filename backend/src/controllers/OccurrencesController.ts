import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Occurrence from '../models/Occurrence';
import occurrenceView from '../views/occurrencesView';
import * as Yup from 'yup';
import { parse, isDate } from "date-fns";

export default {
    async index(request: Request, response: Response) {
        const occurrencesRepository = getRepository(Occurrence);

        const occurrences = await occurrencesRepository.find({
            relations: ['events']
        });

        return response.json(occurrenceView.renderMany(occurrences));
    },

    async show(request: Request, response: Response) {
        const { id } = request.params;

        const orphanagesRepository = getRepository(Occurrence);

        const orphanage = await orphanagesRepository.findOneOrFail(id, {
            relations: ['events']
        });

        return response.json(occurrenceView.render(orphanage));
    },

    async create(request: Request, response: Response) {
        const { 
            title, 
            initDate, 
            endDate,
        } = request.body;

        const occurrencesRepository = getRepository(Occurrence);

        const data = {
            title, 
            initDate, 
            endDate,
        }

        const schema = Yup.object().shape({
            title: Yup.string().required('O título é obrigatório').max(45, "O título possui mais de 45 caracteres"),
            // initDate: Yup.date(Preencha a data corretamente).required(A data é obrigatória).max(endDate, a data inicial não pode ser maior que a final),
            // endDate: Yup.date(Preencha a data corretamente).required(A data é obrigatória).min(initDate, a data final não pode se menor que a inicial),
        })

        await schema.validate(data, {
            abortEarly: false,
        })

        const occurrence = occurrencesRepository.create(data);

        await occurrencesRepository.save(occurrence);

        return response.status(201).json({ 
            success: true,
            id: occurrence.id
        });
    }

}