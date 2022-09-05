import express from "express";

import resize from "./processImages/resize";

import checkParams from "../middlewares/checkParams";
import fileExists from "../middlewares/fileExists";

const routes = express.Router();

routes.get("/resize", checkParams, fileExists, resize);

export default routes;
