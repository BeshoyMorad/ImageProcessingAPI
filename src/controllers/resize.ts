import { Response, Request } from "express";
import foundFile from "../utilities/checkForFile";
import { imageResize } from "../utilities/imageProcessing";

export default async (req: Request, res: Response): Promise<void> => {
  //if the request get to here that means the parameters are good and ready to be used
  // check if the fileName exists in the folder
  const fileName: string = req.query.fileName as string;
  const width = Number(req.query.width);
  const height = Number(req.query.height);

  if (foundFile(fileName + ".jpg", "../../images/before")) {
    const output: string = await imageResize(fileName, width, height);

    if (output !== "error") {
      res.status(200).sendFile(output);
    } else {
      res.status(500).send("Image has failed to process");
    }
  } else {
    res.status(404).send("Didn't find a image with that name");
  }
};
