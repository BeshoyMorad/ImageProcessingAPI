import { Response, Request } from "express";
import path from "path";
import fs from "fs";
import sharp from "sharp";

export default (req: Request, res: Response) => {
  //if the request get to here that means the parameters are good and ready to be used
  // check if the fileName exists in the folder
  const fileNames = fs.readdirSync(
    path.join(__dirname, `../../../images/before/`)
  );

  if (fileNames.includes(req.query.fileName as string) + ".jpg") {
    const inputPath = path.join(
      __dirname,
      `../../../images/before/${req.query.fileName}.jpg`
    );

    const outputPath = path.join(
      __dirname,
      `../../../images/after/${req.query.fileName}_${req.query.width}_${req.query.height}.jpg`
    );

    console.log("Resizing");

    //using Sharp documentation
    //LINK: https://sharp.pixelplumbing.com/api-resize
    sharp(inputPath)
      .resize(Number(req.query.width), Number(req.query.height))
      .toFile(outputPath, (err) => {
        if (err) {
          console.log(err);
        } else {
          res.sendFile(outputPath);
        }
      });
  } else {
    res.send("Didn't find a image with that name");
  }
};
