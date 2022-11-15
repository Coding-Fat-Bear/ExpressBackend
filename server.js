import express from "express";
import cors from "cors";
// const loginRouter = require("./routes/login.routes");
import {getAll,getByID,create,update} from "./controller/loginController.js"
import { router } from "./routes/login.routes.js";
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/login",await router);



// app.get("/data",await getAll);

// app.get("/data/:id",await getByID);
// app.post("/create",await create)
// app.put("/update",await update)

app.use((err, req, res, next) => {
  console.error(err.stack)
res.status(500).send( 'Something broke! ' )
})
app.listen(3000,() => console.log('Started'));