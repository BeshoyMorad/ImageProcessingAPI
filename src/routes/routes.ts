import express from "express";

//routers
import resize from "./resize";

const routes = express.Router();

routes.use("/resize", resize);

export default routes;
