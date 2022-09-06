import path from "path";
import sharp from "sharp";

function imageResize(
  fileName: string,
  width: number,
  height: number
): Promise<string> {
  const inputPath = path.join(__dirname, `../../images/before/${fileName}.jpg`);

  const outputPath = path.join(
    __dirname,
    `../../images/after/${fileName}_${width}_${height}.jpg`
  );

  console.log("Resizing");

  //using Sharp documentation
  //LINK: https://sharp.pixelplumbing.com/api-resize
  return sharp(inputPath)
    .resize(width, height)
    .toFile(outputPath)
    .then(() => outputPath)
    .catch((error) => error);
}

export { imageResize };
