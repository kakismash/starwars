import express, { Request, Response, Router } from 'express';

class StarWarController {
    router: express.Router;

    constructor() {
        this.router = express.Router();
    }

    static getRouter(): Router {
        const instance = new StarWarController();
        return instance.config();
    }

    private config(): Router {
        this.starWarMainArticle();
        return this.router;
    }

    private starWarMainArticle() {
        this.router.get('/', async (req: Request, res: Response) => {
            res.status(200).send([{
                id: '23',
                name: 'Dane'
            }]);
        });
    }
}

export = StarWarController;