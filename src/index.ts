import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
    res.send("hello from server")
});
app.listen(5000, () => {
  console.log("sever is running ");
});
