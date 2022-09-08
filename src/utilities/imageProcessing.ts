import path from "path";
import sharp from "sharp";

function imageResize(
  fileName: string,
  width: number,
  height: number
): Promise<string> {
  const inputPath: string = path.join(
    __dirname,
    `../../images/before/${fileName}.jpg`
  );

  const outputPath: string = path.join(
    __dirname,
    `../../images/after/${fileName}_${width}_${height}.jpg`
  );

  //using Sharp documentation
  //LINK: https://sharp.pixelplumbing.com/api-resize
  return sharp(inputPath)
    .resize(width, height)
    .toFile(outputPath)
    .then(() => outputPath)
    .catch(() => "error");
}

export { imageResize };
