import { helloWorld } from "./hello";

describe("helloworldfunction", () => {
  it("returns hello world", () => {
    //given
    const exspected = "Hello, World!";
    //when
    const actual = helloWorld();

    //then
    expect(actual).toBe(exspected);
  });
});
