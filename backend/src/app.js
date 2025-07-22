import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import {createServer} from "node:http";

import {Server} from "socket.io";

import mongoose from "mongoose";
import connectToSocket from "./controllers/socketManager.js"

import cors from "cors";
import { connect } from 'node:http2';
import userRoutes from "./routes/userroutes.js";


const app = express();
const server = createServer(app);
const io = connectToSocket(server);



app.set("port",(process.env.Port || 8000))
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb",extended:"true"}));


app.use("/api/v1/users",userRoutes);

const start = async () => {
  try {
   
    await mongoose.connect(process.env.MONGO_URL);
    console.log("✅ MongoDB connected");

    server.listen(app.get("port"), () => {
      console.log(`🚀 Server listening on port ${app.get("port")}`);
    });
  } catch (err) {
    console.error("❌ Failed to start server:", err.message);
  }
};

start();