
import {getTimesheetById,createTimesheetById,updateTimesheetById} from "../services/timesheet.service.js";

export async function fetch(req,res){
    const id = req.params.id;
    const date = req.params.date;
    try {
        const [data] =await getTimesheetById(id,date);
        console.log(data);
        res.send(data);
    } catch (err) {
        console.log("error at connection");
    }
}

export async function create(req,res){
    console.log(req.body);
    const {LOGINID,TSDATE,CHECKIN,CHECKOUT} = req.body;
    try {
        const [data] =await createTimesheetById(LOGINID,TSDATE,CHECKIN,CHECKOUT);
        res.send(data);
    } catch (err) {
        console.log("error at connection");
    }
}

export async function update(req,res){
    try {
        const {LOGINID,TSDATE,CHECKIN,CHECKOUT} = req.body;
        const [data] =await updateTimesheetById(LOGINID,TSDATE,CHECKIN,CHECKOUT);
        res.send(data);
    } catch (err) {
        console.log("error at connection");
    }
}