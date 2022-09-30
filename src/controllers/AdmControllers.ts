import { Request, Response } from "express";
import { AdmModel } from "../database/models/AdmModels";

class AdmController {

    async findAll(req: Request, res: Response) {
        const adm = await AdmModel.findAll();
        
        return adm 
        ? res.status(200).json(adm) 
        : res.status(404).send();
    };

    async findById(req: Request, res: Response) {
        const { id } = req.params;

        const adm = await AdmModel.findOne({
            where: {
                id: id
            }
        });

        return adm 
        ? res.status(200).json(adm) 
        : res.status(404).send();
    };

    async updateById(req: Request, res: Response) {
        const { id } = req.params;

        const adm = await AdmModel.update(req.body, {
            where: {
                id: id
            }
        });
        
        return adm 
        ? res.status(204).send() 
        : res.status(404).send();
    };

    async deleteById(req: Request, res: Response) {
        const { id } = req.params;

        const adm = await AdmModel.destroy({
            where: {
                id: id
            }
        });

        return adm 
        ? res.status(204).send() 
        : res.status(404).send();
    };

    async create(req: Request, res: Response) {
        const { name, email, password } = req.body;

        const adm = await AdmModel.create({
            name,
            email,
            password
        });

        return res.status(201).json(adm);
    };
    
};

export default new AdmController();