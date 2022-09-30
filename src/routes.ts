import { Request, Response, Router } from "express";
import AdmControllers from "./controllers/AdmControllers";
import UserController from "./controllers/UserController";
const route = Router();


route.post('/user', UserController.create);

route.get('/user', UserController.findAll);

route.get('/user/:id', UserController.findById);

route.put('/user/:id', UserController.updateById);

route.delete('/user/:id', UserController.deleteById);


route.post('/adm', AdmControllers.create);

route.get('/adm', AdmControllers.findAll);

route.get('/adm/:id', AdmControllers.findById);

route.put('/adm/:id', AdmControllers.updateById);

route.delete('/adm/:id', AdmControllers.deleteById);

export { route };