import express, { Request, Response } from "express";
import routers from "./routes/routes";

const app = express();
const port = 3000;

app.use("/api", routers);

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Welcome to Sizeha App");
});

app.listen(port, () => console.log(`Server running on port ${port}`));

export default app;
