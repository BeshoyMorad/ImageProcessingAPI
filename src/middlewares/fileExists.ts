import { NextFunction, Request, Response } from "express";
import path from "path";
import fs from "fs";

export default (req: Request, res: Response, next: NextFunction) => {
  // check if an image with that width and height exists or no
  const fileNames = fs.readdirSync(path.join(__dirname, `../../images/after/`));

  const image = `${req.query.fileName}_${req.query.width}_${req.query.height}.jpg`;

  if (fileNames.includes(image)) {
    return res
      .status(200)
      .sendFile(path.join(__dirname, `../../images/after/${image}`));
  } else {
    //go to resize to process the image
    next();
  }
};
