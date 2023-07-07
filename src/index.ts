import dotenv from "dotenv";
import AccountRouter from "./router/account.routes";
import connectDB from "./database/connect.database";
import express, { Request, Response } from "express";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

connectDB();

app.use("/", AccountRouter);

app.get("/", (_: Request, res: Response) => {
  res.json({ message: "Hello world" });
});

app.all("*", (_: Request, res: Response) => {
  res.status(404);
  res.json({ message: "Not Found" });
});

app.listen(PORT, () => {
  console.log(`app is running on port: http://localhost:${PORT}/`);
});
