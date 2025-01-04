import express, { Router } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import route from "./route/route.js";

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());
app.use("/", route);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
