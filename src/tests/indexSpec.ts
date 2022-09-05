import Add from "../index";

describe("This is a simple test", () => {
  it("Add 5 + 6 will be 11", () => {
    expect(Add(5, 6)).toEqual(11);
  });
});
