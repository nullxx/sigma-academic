import { getPreHash, generateHash, prepareBody } from "../src/lib/restUtils";

describe("RestUtils", () => {
  test("Order hash values by key", () => {
    const orderedValuesByKey = getPreHash({
      metodo: "xxx",
      pais: "es",
    });
    expect(orderedValuesByKey).toEqual(["xxx", "es"]);
  });

  test("Generate hash", () => {
    const hash = generateHash({
      metodo: "xxx",
      pais: "es",
    });

    expect(hash).toEqual("c95c86c80808c786b171a9ba489f0d84");
  });

  test("Will exclude property x2x from being hashed", () => {
    const body = prepareBody(
      {
        x2x: 11,
        y2y: 22,
      },
      ["x2x"],
      "xxx"
    );

    expect(body.hash).toEqual("2bfb975475f0ceba5c417d024a9ce572");
  });
});
