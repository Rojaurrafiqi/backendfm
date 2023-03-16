import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import FilemedisRoute from "./routes/route.js";
dotenv.config();
import bodyParser from 'body-parser';




const app = express();
app.use (cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(FilemedisRoute);



app.listen(process.env.APP_PORT, ()=> console.log('server up and running')); 



