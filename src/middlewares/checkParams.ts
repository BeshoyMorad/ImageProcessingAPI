import { Response, Request, NextFunction } from "express";

//Middleware used to check the parameters of the request [fileName, width, height]
export default (req: Request, res: Response, next: NextFunction) => {
  const query = req.query;

  //check each parameter
  let error = "";

  if (
    query.fileName === undefined ||
    query.fileName?.toString().trim() === ""
  ) {
    error += "Please determine fileName";
  }
  if (query.width === undefined || query.width?.toString().trim() === "") {
    error += "<br>Please determine width";
  }
  if (query.height === undefined || query.height?.toString().trim() === "") {
    error += "<br>Please determine height";
  }

  if (error === "") {
    //All parameters here
    // check if width and height are numbers
    if (isNaN(Number(query.width))) {
      error += "<br>Please enter a valid number for the width";
    }
    if (isNaN(Number(query.height))) {
      error += "<br>Please enter a valid number for the height";
    }

    if (error === "") {
      next();
    } else {
      return res.send(error);
    }
  } else {
    return res.send(error);
  }
};
