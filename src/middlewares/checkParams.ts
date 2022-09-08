import { Response, Request, NextFunction } from "express";

//Middleware used to check the parameters of the request [fileName, width, height]
export default (
  req: Request,
  res: Response,
  next: NextFunction
): Response<unknown, Record<string, unknown>> | undefined => {
  const name: string = req.query.fileName as string;
  const width: string = req.query.width as string;
  const height: string = req.query.height as string;

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
    //check if the width and height are positive integers
    if (isNaN(Number(width)) || Number(width) <= 0) {
      error += "<br>Please enter a positive integer for the width";
    }
    if (isNaN(Number(height)) || Number(height) <= 0) {
      error += "<br>Please enter a positive integer for the height";
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
