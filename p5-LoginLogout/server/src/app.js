import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json({limit: "32kb"}));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev")); // logs requests
app.use(cookieParser());


import AuthRouter from "../src/routes/auth.route.js"
app.use("/api/v1/auth", AuthRouter);
export default app;