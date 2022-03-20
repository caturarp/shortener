// Module
import express, { Application } from "express"
import cors from "cors"
import helmet from "helmet"
import {config as dotenv} from "dotenv"
import { sequelize } from "./instance/sequelize";
import models from "./db/models/Index";
import ShortController from "./service/short/ShortController";
import bodyParser from "body-parser";

// Routes


export class App {
    public app: Application;

    constructor(){
        this.app = express()
        this.plugins();
        this.connectDB();
        this.routes();
        dotenv();
    }
    protected plugins(){
        this.app.use(bodyParser.json())
        this.app.use(cors);
        this.app.use(helmet);
        // this.app.use(bodyParser.urlencoded({ extended: false }))
    }
    protected routes(): void{
        this.app.use("/shorten", ShortController);
        this.app.get("/", (req, res) =>{
            res.send("ok")
        })
    }
    
    protected async connectDB(): Promise<void> {
        sequelize.authenticate().then(() => {
            console.log("Connection has been established successfully.");
          })
            .catch((err) => {
              console.error("Unable to connect to the database:", err);
            });
          sequelize.addModels(models)
          console.log("await sync");
          
          await sequelize.sync({ alter: true});
    }
}