
import express, {Request, Response} from "express";
import StarWarController from "./controller/starWarController";

class StarWarServer {
    app: express.Application = express();
    PORT: number = 8000;
    
    config(): void {
        this.bodyParser();
        this.routes();
    }

    start(): void {
        this.config();
        this.app.listen(this.PORT, () => {
            console.log(`⚡️[server]: Server is running at https://localhost:${this.PORT}`);
        });
    }

    private bodyParser(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    private routes(): void {
        this.app.use('/starwar', StarWarController.getRouter());
    }

}

const starWarServer = new StarWarServer();

starWarServer.start();