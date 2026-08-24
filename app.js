import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors";
import fileUpload from "express-fileupload";
import dbConnection from "./database/dbconnection.js";
import { errormiddleware } from "./middlewares/error.js";
import messageRoutes from "./router/messageRoutes.js"

const app = express();
dotenv.config({path: "./config/config.env" });

app.use(
    cors({
    origin: [process.env.PORTFOLIO_URL, process.env.DASHBOARD_URL ],
    methods: ["GET","POST","DELETE","PUT"],
    credentials: true
}))

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
}))

app.use("/api/v1/message", messageRoutes)

dbConnection();
app.use(errormiddleware);
export default app;