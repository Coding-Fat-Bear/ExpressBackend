
import {getEmployeeMasterById,getEmployeeMasterAll,createEmployeeMaster,updateEmployeeMaster} from "../services/employeeMaster.service.js";

export async function getAll (req, res) {
   try{
       const [data] = await getEmployeeMasterAll();
       res.send(data);
   }catch(err)
   {
       console.log("error at connection");
   }
   
 }
 
export async function getByID(req, res) {
   try{
       const id = req.params.id;
       const [data] = await getEmployeeMasterById(id);
       res.send(data);
   }catch(err)
   {
       console.log("error at connection");
   }

 }
  export async function create  (req,res) {
   try{
       const {EMPCOD,USERNAME,PASSWORD} = req.body;
       const data = await createEmployeeMaster(EMPCOD,USERNAME,PASSWORD);
       console.log(data);
       res.json ({ message : "success"});
   }catch(err)
   {
       console.log("error at connection");
   }
  
 }
  export async function update (req,res) {
   try{
       const {EmployeeMasterID,USERNAME,PASSWORD} = req.body;
       const data = await updateEmployeeMaster(EmployeeMasterID,USERNAME,PASSWORD);
       console.log(data);
       res.json ({ message : "success"});
   }catch(err)
   {
       console.log("error at connection");
   }
   
 }
 



   