import { Response, Request, NextFunction } from "express";

//Middleware used to check the parameters of the request [fileName, width, height]
export default (req: Request, res: Response, next: NextFunction) => {
  const name = req.query.fileName as string;
  const width = req.query.width as string;
  const height = req.query.height as string;

  //check each parameter
  let error = "Bad Request";

  if (name === undefined || name.trim() === "") {
    error += "<br>Please determine fileName";
  }
  if (width === undefined || width.trim() === "") {
    error += "<br>Please determine width";
  }
  if (height === undefined || height.trim() === "") {
    error += "<br>Please determine height";
  }

  if (error === "Bad Request") {
    //All parameters have been sent
    // check if width and height are numbers or not
    if (isNaN(Number(width))) {
      error += "<br>Please enter a valid number for the width";
    }
    if (isNaN(Number(height))) {
      error += "<br>Please enter a valid number for the height";
    }

    if (error === "Bad Request") {
      next();
    } else {
      return res.status(400).send(error);
    }
  } else {
    return res.status(400).send(error);
  }
};
