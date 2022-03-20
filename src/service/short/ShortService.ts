import { Request, Response } from "express";
import { IService } from "@service/api/ServiceInterface";
import Short from "../../db/models/Short"
import { NotNull } from "sequelize-typescript";

class ShortService {
    index = async (req: Request , res: Response ) => {
        try {
            const short: Short[] = await Short.findAll()
    
            return res.status(200).json({
                short
            })
        } catch (err) {

            return res.status(500).send("error :" + err)
            
        }
    }
    create = async (req: Request , res: Response ): Promise<void> => {
        let data = req.body;
            try {
                console.log(data);
                // const addShortenlink = await Short.create(data)
                res.status(200).send(data.url + "telah dipintaskan.")
            
            } catch (err) {    
                res.status(500).send(`Operasi pintas gagal: ${err}`)
            
            }

    }
    // show = async (req: Request , res: Response ): Promise<Response> => {
    //     const {id} = req.params;

    //     let short = await Short.findOne({
    //         where: { id }
    //     });
    //     if(!short){
    //         return res.status(500).send(`Short not available.`);
    //     }
    //     return res.status(200).send(short) ;   
    // }
    // update = async (req: Request , res: Response ): Promise<Response> => {
    //     const {id} = req.params;
    //     const {name} = req.body;

    //     let shortBefore = await Short.findOne({
    //         where: { id }
    //     });

    //     if (!shortBefore){
    //         return res.status(500).send(`Short name doesn't exist.`)
    //     }
    //     try {

    //         let short = await Short.update({ name }, { where: { id } });
    //         return res.status(200).send(`Short name for ${shortBefore.name} has successfully changed into ${name}.`);
            
    //     } catch (err) {
            
    //        return res.status(500).send(`Create new short failed: ${err}`)

    //     }

    // }
    // delete = async (req: Request , res: Response ) => {
    //     const {id} = req.params;
    //     let isShortAvailable = await Short.findOne({
    //         where: { id }
    //     });
    //     if (!isShortAvailable){
    //         res.status(500).send(`Short name doesn't exist.`)
    //     }
    //     // const deleteShort = Short.destroy({ where: { id } })

    //     const deletedShort = Short.destroy({ where: { id } }).then(() => {
    //             res.status(200).send("short  has been deleted.")
    //         })
    //         .catch((error)=>{
    //            res.status(500).send(error) 
    //            console.log("tes")
            //     }
            // )
            // }
    
}

export default new ShortService();