import express from "express";
import cors from "cors";
import {getLoginById,getLoginAll,delLoginById,createLogin,updateLogin} from "./Services/loginsServices.js";
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const posts = [
  {
    username: 'Kyle',
    title: 'Post 1'
  },
  {
    username: 'Jim',
    title: 'Post 2'
  }
]


app.get("/data", async(req, res) => {
  const [data] = await getLoginAll();
  res.send(data);
});

app.get("/data/:id", async(req, res) => {
  const id = req.params.id;
  const [data] = await getLoginById(id);
  res.send(data);
});
app.post("/create",async (req,res) => {
  const {EMPCOD,USERNAME,PASSWORD} = req.body;
  const data = await createLogin(EMPCOD,USERNAME,PASSWORD);
  console.log(data);
  res.json ({ message : "success"});
})
app.put("/update",async (req,res) => {
  const {LOGINID,USERNAME,PASSWORD} = req.body;
  const data = await updateLogin(LOGINID,USERNAME,PASSWORD);
  console.log(data);
  res.json ({ message : "success"});
})

app.use((err, req, res, next) => {
  console.error(err.stack)
res.status(500).send( 'Something broke! ' )
})
app.listen(3000,() => console.log('Started'));