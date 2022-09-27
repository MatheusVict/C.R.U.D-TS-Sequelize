import { Request, Response } from "express";
import { UserModel } from "../database/models/UserModel";

class UserController {
    async findAll(req: Request, res: Response) {
        const user = await UserModel.findAll();
        return user.length > 0 
        ? res.status(200).json(user) 
        : res.status(204).send()
    }

    async findById(req: Request, res: Response) {
        const { id } = req.params;
        const user = await UserModel.findOne({
            where: {
                id: id
            },
        });

        return user ? res.status(200).json(user) 
        : res.status(404).send();

    }

    async updateById(req:Request, res: Response) {
        const { id } = req.params;
        const user = await UserModel.update(req.body, {
            where: {
                id: id
            }
        });
        return user ? res.status(204).send()
        : res.status(404).send()
    }

    async deleteById(req:Request, res: Response) {
        const { id } = req.params;
        const user = await UserModel.destroy({
            where: {
                id: id
            },
        });

        return user ? res.status(204).send()
        : res.status(404).send()
    }

    async create(req:Request, res: Response) {
        const { email, name, age } = req.body;
        const user = await UserModel.create({
            email,
            name,
            age,
        });
        return res.status(201).json(user)
    }
}

export default new UserController()