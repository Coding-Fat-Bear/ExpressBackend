//dont know how to use in es6 :(

import express from "express";
export const  loginRouter = express.Router();
import {getAll,getByID,create,update} from "../controller/loginController.js"
// const loginController = require("../controller/loginController.js");

  // async function getAllroute(){
  loginRouter.get("/data", getAll);
// }

  // async function getByIDroute(){ 
  loginRouter.get("/data/:id",getByID);
// }
  // async function createroute(){
  loginRouter.post("/create",create)
// }
  // async function updateroute(){
  loginRouter.put("/update",update)
// }
