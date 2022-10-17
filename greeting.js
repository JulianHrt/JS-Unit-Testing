function greeting(name) {
  if (typeof name !== "string") {
    throw new Error("not a string");
  }
  if (name === "Jessica") {
    return "Hello friend!";
  }
  if (name === "Andrea") {
    return "Hello friend!";
  } else {
    return "Hello there!";
  }
}

export { greeting };
