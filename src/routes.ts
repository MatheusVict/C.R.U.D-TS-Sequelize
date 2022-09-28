import { Request, Response, Router } from "express";
import UserController from "./controllers/UserController";
const route = Router();


route.post('/user', UserController.create);

route.get('/user', UserController.findAll);

route.get('/user/:id', UserController.findById);

route.put('/user/:id', UserController.updateById);

route.delete('/user/:id', UserController.deleteById);

export { route };