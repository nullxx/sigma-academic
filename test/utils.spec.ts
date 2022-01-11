import { objectToParams } from "../src/lib/utils";

describe("Utils", () => {
  test("Convert object to params", () => {
    const str = objectToParams({ test: "test", test2: "test2" });
    expect(str).toEqual("test=test&test2=test2");
  });
});
