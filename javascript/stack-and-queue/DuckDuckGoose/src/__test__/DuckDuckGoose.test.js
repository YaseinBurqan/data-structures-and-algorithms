/* eslint-disable new-cap */
/* eslint-disable quotes */
"use strict";

const DuckDuckGoose = require("../DuckDuckGoose");

describe("Duck Duck Goose game using a Queue ", () => {
  test("return message if enter empty list", () => {
    expect(DuckDuckGoose([], 3)).toEqual("Empty Values");
  });
  test("return the last value as a string in the list", () => {
    expect(DuckDuckGoose("A", "B", "C", "D", "E", 3)).toEqual(
      "only Y is lefts"
    );
  });
});
