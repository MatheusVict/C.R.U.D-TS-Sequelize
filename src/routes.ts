import { Request, Response, Router } from "express";
const route = Router()
const enve = process.env.PROJECT_NAME

route.get('/', (req: Request, res: Response) => {
    res.send(`${enve}`)
})

export { route };