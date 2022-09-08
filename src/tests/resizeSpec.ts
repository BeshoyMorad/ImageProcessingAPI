import supertest from "supertest";
import app from "../index";
import foundFile from "../utilities/checkForFile";
import path from "path";
import fs from "fs";
import { imageResize } from "../utilities/imageProcessing";

const request = supertest(app);
describe("Testing resizing images", () => {
  it("Sending wrong fileName [bad request]", async () => {
    const response = await request
      .get("/api/resize")
      .query({ fileName: "randomName", width: "500", height: "500" });
    expect(response.status).toBe(404);
  });

  it("Check if the image has been processed using imageResize method", async () => {
    //check if the file it should generate exists
    const imagesPath: string = path.join(__dirname, `../../images/after`);

    if (foundFile("fjord_500_500.jpg", "../../images/after")) {
      fs.unlinkSync(imagesPath + "/fjord_500_500.jpg");
    }

    expect(await imageResize("fjord", 500, 500)).not.toEqual("error");
  });
});
