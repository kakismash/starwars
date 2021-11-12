
import express, {Request, Response} from "express";
import path from "path";
import { StarWarController } from "./controller/starWar.controller";

let cors = require('cors')

class StarWarServer {
    app: express.Application = express();
    PORT = process.env.PORT || 8000;
    
    config(): void {
    
        const dir = path.join(__dirname, 'static');
        this.app.use(express.static(dir));
        this.app.use(cors())
    
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
        this.app.use('/getMyStarWarsCollection', StarWarController.getRouter());
    }

}

const starWarServer = new StarWarServer();

starWarServer.start();