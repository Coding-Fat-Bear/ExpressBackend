import  express  from "express";
export const  timesheetRouter = express.Router();
import {fetch,create,update} from "../controller/timesheetController.js"

timesheetRouter.get("/fetch/:id",fetch )

timesheetRouter.get("/create/:id",create)

timesheetRouter.get("/update/:id",update)
