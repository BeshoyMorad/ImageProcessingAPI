import { NextFunction, Request, Response } from "express";
import foundFile from "../utilities/checkForFile";
import path from "path";

export default (req: Request, res: Response, next: NextFunction) => {
  // check if an image with that width and height exists or no
  const image = `${req.query.fileName}_${req.query.width}_${req.query.height}.jpg`;

  if (foundFile(image, "../../images/after/")) {
    return res
      .status(200)
      .sendFile(path.join(__dirname, `../../images/after/${image}`));
  } else {
    //go to resize to process the image
    next();
  }
};
