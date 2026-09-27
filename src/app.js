import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";

const app = express();
app.use(helmet());
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));

app.use(express.json({limit: "16kb"}));
app.use(cookieParser());

app.get("/api/v1/health", (req, res) => {
    res.json({
        status: "ok",
        message: "Server is running",
    })
})

export default app;