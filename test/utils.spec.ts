import { objectToParams } from "../src/lib/utils";

describe("Utils", () => {
  test("Convert object to params", () => {
    const str = objectToParams({ test: "test", test2: "test2" });
    expect(str).toEqual("test=test&test2=test2");
  });

  test("Convert object to params no url encoded", () => {
    const str = objectToParams({ test: "&s%/agf", "test%sa/S": "%)a" });
    // should convert to url encoded
    expect(str).toEqual(encodeURIComponent("test") + "=" + encodeURIComponent("&s%/agf") + "&" + encodeURIComponent("test%sa/S") + "=" + encodeURIComponent("%)a"));
  });
});
