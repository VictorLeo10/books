import express, { Application, Request, Response } from "express";
import { router } from "../routes/routes";
import cors from "cors";
const port: number | string = process.env.port || 2031;
const app: Application = express();
app.use(express.json());
require("../configuration/database");
app.use(cors({ origin: "*" }));

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "...😒",
  });
});

app.use("/", router);

app.listen(port, () => {
  console.log("...😒:", port);
});
