const express = require("express");
const loginRouter = require("./router/login.router");
const employeeRouter = require("./router/employee.router");
const bankRouter = require("./router/bank.router");
const bslnRouter = require("./router/bussiness_line.router");
const deptRouter = require("./router/department.router");
const emptypRouter = require("./router/employee_type.router");
const genRouter = require("./router/gender.router");
const lnguRouter = require("./router/language.router");
const moduRouter = require("./router/module.router");
const pgmlngRouter = require("./router/pgm_lngu.router");
const rnkempRouter = require("./router/rnk_emp.router");
const authRouter = require("./router/authorization.router");
const cntryRouter = require("./router/country.router");
const inquiryRouter = require("./router/inquiry.router");
const cors = require('cors')
const app = express();
const timesheetRouter = require("./router/timesheet.router");
require("dotenv").config();

var corsOptions = {
    origin: "http://localhost:4200"
  };

app.use(cors(corsOptions));


app.use(express.urlencoded({ extended: true }));//
app.use(express.json());
app.use("/login",loginRouter);
app.use("/api",employeeRouter);
app.use("/api",bankRouter);
app.use("/api",bslnRouter);
app.use("/api",deptRouter);
app.use("/api",emptypRouter);
app.use("/api",genRouter);
app.use("/api",lnguRouter);
app.use("/api",moduRouter);
app.use("/api",pgmlngRouter);
app.use("/api",rnkempRouter);
app.use("/api",authRouter);
app.use("/api",cntryRouter);
app.use("/api",inquiryRouter);
app.use("/timesheet", timesheetRouter);

app.use((err, req, res, next) => {
    console.error(err.stack)
  res.status(500).send( 'Something broke! ' )
  })

app.listen(process.env.port,()=>{
    console.log("server started");
})