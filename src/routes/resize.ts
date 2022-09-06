import express from "express";

//middlewares
import checkParams from "../middlewares/checkParams";
import fileExists from "../middlewares/fileExists";

//controller
import resizeImage from "../controllers/resize";

const resize = express.Router();

resize.get("/", checkParams, fileExists, resizeImage);

export default resize;
