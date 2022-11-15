//dont know how to use in es6 :(

import express from "express";
export const  router = express.Router();
import {getAll,getByID,create,update} from "../controller/loginController.js"
// const loginController = require("../controller/loginController.js");
  // async function getAllroute(){
  router.get("/data", getAll);
// }

  // async function getByIDroute(){ 
  router.get("/data/:id",getByID);
// }
  // async function createroute(){
  router.post("/create",create)
// }
  // async function updateroute(){
  router.put("/update",update)
// }
