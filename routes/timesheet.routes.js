import  express  from "express";
export const  timesheetRouter = express.Router();
import {fetch,create,update} from "../controller/timesheetController.js"

timesheetRouter.get("/fetch/:id/:date",fetch )

timesheetRouter.post("/create",create)

timesheetRouter.get("/update/:id",update)

