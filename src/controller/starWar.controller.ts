import express, { Request, Response, Router } from 'express';
import { StarWarService } from '../service/starWar.service';

let cors = require('cors')
export class StarWarController {
    router: express.Router;

    constructor(private readonly starWarService: StarWarService) {
        this.router = express.Router();
    }

    static getRouter(): Router {
        const instance = new StarWarController(new StarWarService());
        return instance.config();
    }

    private config(): Router {
        this.mainArticle();
        this.list();
        this.element();
        return this.router;
    }

    private mainArticle(): void {
        
        this.router.get('/', cors(), async (req: Request, res: Response) => {
            res.status(200).json( this.starWarService.list(''));
        });

    }

    private list(): void {
        
        this.router.get('/:list', cors(), async (req: Request, res: Response) => {
        
            const user = req.header('current-user');

            if (user !== undefined) {
                res.status(200).json(this.starWarService.list(req.params.list));
            } else {
                res.status(401).send("User not Authenticated");
            }   

        })
    }

    private element(): void {

        this.router.get('/:list/:id', cors(), async (req: Request, res: Response) => {
        
            const user = req.header('current-user');

            if (user !== undefined) {
                res.status(200).json(this.starWarService.getElement( req.params.list, parseInt(req.params.id)));
            } else {
                res.status(401).send("User not Authenticated");
            }   

        })
    }


}
