import  express  from "express";
export const  employeeMasterRouter = express.Router();
import {fetch,create,update} from "../controller/employeeMasterController.js"

employeeMasterRouter.get("/fetch/:id/:date",fetch )

employeeMasterRouter.post("/create",create)

employeeMasterRouter.get("/update/:id",update)

