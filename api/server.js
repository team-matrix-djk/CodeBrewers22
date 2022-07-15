import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/routes.js";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";

const app = express();


dotenv.config();

app.use(cors());

app.use(express.json());

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", router);
