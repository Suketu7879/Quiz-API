import express from "express";
import { getQuestion } from "../controller/controller.js";

const route = express.Router();

route.get("/quizapi",getQuestion);

export default route;
