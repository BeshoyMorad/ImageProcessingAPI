import supertest from "supertest";
import app from "../index";

const request = supertest(app);
describe("Testing resizing images", () => {
  it("Sending wrong fileName [bad request]", async () => {
    const response = await request
      .get("/api/resize")
      .query({ fileName: "randomName", width: "500", height: "500" });
    expect(response.status).toBe(404);
  });

  it("Sending correct parameters", async () => {
    const response = await request
      .get("/api/resize")
      .query({ fileName: "fjord", width: "500", height: "500" });
    expect(response.status).toBe(200);
  });
});
