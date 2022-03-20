import { Router, Request, Response } from "express";
import BaseController from "../api/BaseController";
import ShortService from "./ShortService";

class ShortController extends BaseController{
    public routes(): void{
        this.router.get("/", ShortService.index); // for test default show all
        // this.router.get("/:url", ShortService.show);
        this.router.post("/", ShortService.create);
        // this.router.put("/:url", ShortService.update);
        // this.router.delete("/:url", ShortService.delete)
    }
}

export default new ShortController().router;