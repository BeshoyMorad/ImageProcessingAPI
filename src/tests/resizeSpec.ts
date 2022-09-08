import supertest from "supertest";
import app from "../index";
import path from "path";
import fs from "fs";

const request = supertest(app);
describe("Testing resizing images", () => {
  it("Sending wrong fileName [bad request]", async () => {
    const response = await request
      .get("/api/resize")
      .query({ fileName: "randomName", width: "500", height: "500" });
    expect(response.status).toBe(404);
  });

  it("Sending correct parameters and check if the image has been processed", async () => {
    //check if the file it should generate exists
    const imagesPath: string = path.join(__dirname, `../../images/after`);
    const fileNames: string[] = fs.readdirSync(imagesPath);

    if (fileNames.includes(`fjord_500_500.jpg`)) {
      fs.unlinkSync(imagesPath + "/fjord_500_500.jpg");
    }

    await request
      .get("/api/resize")
      .query({ fileName: "fjord", width: "500", height: "500" });

    expect(fileNames).toContain("fjord_500_500.jpg");
  });
});
