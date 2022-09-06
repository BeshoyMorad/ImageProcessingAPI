import supertest from "supertest";
import app from "../index";

const request = supertest(app);
describe("Testing the parameters of resizing images [fileName, width, height]", () => {
  it("Sending nothing in the query [bad request]", async () => {
    const response = await request.get("/api/resize").query({});
    expect(response.status).toBe(400);
  });

  it("Sending fileName and forget width and height [bad request]", async () => {
    const response = await request
      .get("/api/resize")
      .query({ fileName: "fjord" });
    expect(response.status).toBe(400);
  });

  it("Sending fileName and width and forget height [bad request]", async () => {
    const response = await request
      .get("/api/resize")
      .query({ fileName: "fjord", width: "500" });
    expect(response.status).toBe(400);
  });

  it("Sending strings instead of numbers for width [bad request]", async () => {
    const response = await request
      .get("/api/resize")
      .query({ fileName: "fjord", width: "50fe0", height: "500" });
    expect(response.status).toBe(400);
  });

  it("Sending strings instead of numbers for height [bad request]", async () => {
    const response = await request
      .get("/api/resize")
      .query({ fileName: "fjord", width: "500", height: "50fe0" });
    expect(response.status).toBe(400);
  });
});
