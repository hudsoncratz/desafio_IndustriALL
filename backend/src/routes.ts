import { Router } from 'express';
import OccurrencesController from './controllers/OccurrencesController';
import EventsController from './controllers/EventsController';


const routes = Router();

routes.get('/occurrences', OccurrencesController.index);
routes.post('/occurrences', OccurrencesController.create);
routes.post('/events', EventsController.create);
export default routes;
