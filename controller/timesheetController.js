
import {getTimesheetById,createTimesheetById,updateTimesheetById} from "../services/timesheet.service.js";

export async function fetch(req,res){
    const id = req.params.id;
    try {
        const [data] =await getTimesheetById(id);
        console.log("error at fetch");
        res.send(data);
    } catch (err) {
        console.log("error at connection");
    }
}

export async function create(req,res){
    const id = req.params.id;
    try {
        const [data] =await createTimesheetById(id);
        res.send(data);
    } catch (err) {
        console.log("error at connection");
    }
}

export async function update(req,res){
    const id = req.params.id;
    try {
        const {LOGINID,USERNAME,PASSWORD} = req.body;
        const [data] =await updateTimesheetById(LOGINID,USERNAME,PASSWORD);
        res.send(data);
    } catch (err) {
        console.log("error at connection");
    }
}