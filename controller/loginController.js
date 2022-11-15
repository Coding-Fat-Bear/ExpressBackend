
import {getLoginById,getLoginAll,createLogin,updateLogin} from "../services/login.service.js";

 export async function getAll (req, res) {
    try{
        const [data] = await getLoginAll();
        res.send(data);
    }catch(err)
    {
        console.log("error at connection");
    }
    
  }
  
 export async function getByID(req, res) {
    try{
        const id = req.params.id;
        const [data] = await getLoginById(id);
        res.send(data);
    }catch(err)
    {
        console.log("error at connection");
    }

  }
   export async function create  (req,res) {
    try{
        const {EMPCOD,USERNAME,PASSWORD} = req.body;
        const data = await createLogin(EMPCOD,USERNAME,PASSWORD);
        console.log(data);
        res.json ({ message : "success"});
    }catch(err)
    {
        console.log("error at connection");
    }
   
  }
   export async function update (req,res) {
    try{
        const {LOGINID,USERNAME,PASSWORD} = req.body;
        const data = await updateLogin(LOGINID,USERNAME,PASSWORD);
        console.log(data);
        res.json ({ message : "success"});
    }catch(err)
    {
        console.log("error at connection");
    }
    
  }
  



    