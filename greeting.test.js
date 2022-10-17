import { greeting } from "./greeting";

describe("greeting function", () => {
  it(" wenn Jessica dann return Hello Friend ", () => {
    //given
    const name = "Jessica";
    const expectation = "Hello friend!";

    //when
    const call = greeting(name);

    //then
    expect(call).toBe(expectation);
  });
});

describe("greeting function", () => {
  it(" wenn Andrea dann return Hello Friend ", () => {
    //given
    const name = "Andrea";
    const expectation = "Hello friend!";

    //when
    const call = greeting(name);

    //then
    expect(call).toBe(expectation);
  });
});

describe("greeting function", () => {
  it(" wenn Andrea dann return Hello Friend ", () => {
    //given
    const name = "";
    const expectation = "Hello there!";

    //when
    const call = greeting(name);

    //then
    expect(call).toBe(expectation);
  });
});

describe("greeting function", () => {
  it(" wenn Andrea dann return Hello Friend ", () => {
    //given
    const name = "";
    const expectation = "Hello there!";

    //when
    const call = greeting(name);

    //then
    expect(call).toBe(expectation);
  });
});

describe("greeting function", () => {
  it(" wenn unknown dann return Hello there ", () => {
    //given
    const name = "";
    const expectation = "Hello there!";

    //when
    const call = greeting(name);

    //then
    expect(call).toBe(expectation);
  });
});

describe("greeting function", () => {
  it(" wenn kein string throw error ", () => {
    //given
    const name = 1;
    const expectationErrorMessage = "not a string";

    //when
    const call = () => greeting(name);

    //then
    expect(call).toThrow(expectationErrorMessage);
  });
});
