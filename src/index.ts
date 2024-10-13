import express, { Express } from "express";

const app: Express = express();
const config = require("./config");
const surveyRoutes = require("./routes/surveyRoute");

app.use(express.json());
app.use("/api/surveys", surveyRoutes);

app.listen(config.PORT, () => {
  console.log(`sever is running on PORT ${config.PORT}`);
});
