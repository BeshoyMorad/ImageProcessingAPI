import { Response, Request } from "express";
import path from "path";
import fs from "fs";
import { imageResize } from "../utilities/imageProcessing";

export default async (req: Request, res: Response) => {
  //if the request get to here that means the parameters are good and ready to be used
  // check if the fileName exists in the folder
  const images: string[] = fs.readdirSync(
    path.join(__dirname, `../../images/before`)
  );
  const fileName: string = req.query.fileName as string;
  const width = Number(req.query.width);
  const height = Number(req.query.height);

  if (images.includes(fileName + ".jpg")) {
    const output = await imageResize(fileName, width, height);

    if (output !== "") {
      res.status(200).sendFile(output);
    } else {
      res.status(500).send("Image has failed to process");
    }
  } else {
    res.status(404).send("Didn't find a image with that name");
  }
};
