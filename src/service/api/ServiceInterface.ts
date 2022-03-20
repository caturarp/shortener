import {NextFunction, Request, Response, } from "express";

export interface IService{
    index(req: Request, res: Response, next:NextFunction): Response | Promise<void>;
    create(req:Request, res: Response): Response | Promise<void>;
    show(req: Request, res: Response): Response | Promise<void>;
    update(req: Request, res: Response): Response | Promise<void>;
    delete(req: Request, res: Response): Response | Promise<void>;
}