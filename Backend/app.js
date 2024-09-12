import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConn } from "./src/db/dbConnection.js";
import { errorMiddleware } from "./src/Middlewares/error.js";
import reservationRouter from "./src/routes/reservation.js";

const app = express();
dotenv.config({ path: "./config/config.env" });

// connected backend to frontend
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api/v1/reservation", reservationRouter);

dbConn();

app.use(errorMiddleware)

export default app;
