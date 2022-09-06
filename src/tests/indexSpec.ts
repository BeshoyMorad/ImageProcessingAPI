import supertest from "supertest";
import app from "../index";

const request = supertest(app);
describe("Testing endpoints responses", () => {
  it("Check default endpoint '/'", async () => {
    const response = await request.get("/");
    expect(response.status).toBe(200);
  });

  it("Check resizing endpoint '/api/resize'", async () => {
    const response = await request.get("/api/resize");
    //response will send status code 400 because there is no parameters in the request
    expect(response.status).toBe(400);
  });

  it("Cehck that other endpoints will return (404)", async () => {
    const response = await request.get("/testing");
    expect(response.status).toBe(404);
  });
});
