import { Router } from 'express';
import IndexController from '../controllers/index';

const router = Router();
const indexController = new IndexController();

export function setRoutes(app: Router) {
    app.get('/api/data', indexController.getData);
    app.post('/api/data', indexController.postData);
}