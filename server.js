const express = require('express');
require("dotenv").config();
const  db  = require("./models");
const cors = require('cors')
const loginRouter = require("./routes/login.routes");
const timesheetRouter = require("./routes/timesheet.routes");
const app = express();

var corsOptions = {
  origin: "http://localhost:4200"
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/login", loginRouter);
app.use("/timesheet", timesheetRouter);

app.use((err, req, res, next) => {
  console.error(err.stack)
res.status(500).send( 'Something broke! ' )
})

db.sequelize.sync().then( (req)=>{
  app.listen(3000, ()=>{
      console.log("Server running");
  });
})