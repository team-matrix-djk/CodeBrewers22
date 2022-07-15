import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/routes.js";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import tokenToID from "./middleware/authenticateToken.js";

const app = express();

dotenv.config();

app.use(cors());

app.use(bodyParser.json());

connectDB();

app.use(tokenToID);

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", router);

app.listen(process.env.PORT || "8000", () => {
  console.log(`Server running at ${process.env.PORT || "8000"}`);
});
