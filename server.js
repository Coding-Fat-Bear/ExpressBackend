

const  db  = require("./models");
const app = express();







db.sequelize.sync().then( (req)=>{
  app.listen(3000, ()=>{
      console.log("Server running");
  });
})