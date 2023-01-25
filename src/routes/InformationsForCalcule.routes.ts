import { Router } from "express";
import { createinformationsForCalculeController } from "../modules/CreateInformationsForCalcule";
import { getInformationsForCalculeController } from "../modules/GetInformationsForCalcule";
import { createArrayInformationsForCalculeController } from "../modules/CreateArrayInformationsForCalcule";
import { deleteAllInformationsForCalculeController } from "../modules/DeleteAllInformationsForCalcule";
import { deleteInformationsForCalculeController } from "../modules/DeleteInformationsForCalcule";



const routerInformationsForCalcule = Router();



routerInformationsForCalcule.post("/", (req, res) => {
    return createinformationsForCalculeController.execute(req, res);
})
routerInformationsForCalcule.post("/list", (req, res) => {
    return createArrayInformationsForCalculeController.execute(req, res);
})


routerInformationsForCalcule.get("/", (req, res) => {
    return getInformationsForCalculeController.execute(req, res);
})


routerInformationsForCalcule.delete("/",
    (req, res) => {
        return deleteAllInformationsForCalculeController.execute(req, res);
    })



routerInformationsForCalcule.delete("/:id",
    (req, res) => {
        return deleteInformationsForCalculeController.execute(req, res);
    })





export { routerInformationsForCalcule };