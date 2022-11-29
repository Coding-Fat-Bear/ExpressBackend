import express from "express";
import cors from "cors";
// const loginRouter = require("./routes/login.routes");
import { loginRouter } from "./routes/login.routes.js";
import { timesheetRouter } from "./routes/timesheet.routes.js";
import {employeeRouter} from "./routes/employeemaster.routes.js";
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/login",await loginRouter);

app.use("/timesheet",await timesheetRouter);

app.use("/employee",await employeeRouter);

app.use((err, req, res, next) => {
  console.error(err.stack)
res.status(500).send( 'Something broke! ' )
})
app.listen(3000,() => console.log('Started'));