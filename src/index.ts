import express, { Express, Request, Response } from "express";

const app: Express = express();
const config = require("./config");
const surveyRoute = require("./routes/surveyRoute");

app.use(express.json());
app.use("/api/surveys", surveyRoute);

app.listen(config.port, () => {
  console.log(`sever is running on PORT ${config.port}`);
});
