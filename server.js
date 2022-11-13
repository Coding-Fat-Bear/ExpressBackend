import express from "express";
import cors from "cors";

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
     message: "Hello World" 
    });
app.use((err, req, res, next) => {
      console.error(err.stack)
    res.status(500).send( 'Something broke! ' )
  })
});
app.listen(3000,() => console.log('Started'));