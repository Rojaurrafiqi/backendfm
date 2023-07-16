import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import FilemedisRoute from "./routes/route.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import http from "http";
import { Server } from "socket.io";

dotenv.config();

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(FilemedisRoute);

app.use("/uploads/", express.static("uploads"));

io.on("connection", (socket) => {
  console.log("New client connected");
});

server.listen(process.env.APP_PORT, () => console.log("Server up and running"));
