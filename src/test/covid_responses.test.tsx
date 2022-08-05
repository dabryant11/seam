describe("Showing responses...", () => {
  const request = require("supertest");
  const app = require("../index.js");
  const fs = require("fs");
  var data = fs.readFileSync("data.json");
  let responses = [];
  try {
    responses = JSON.parse(data);
  } catch (error) {
    new Error("something broke!");
  }
  let firstResponse = responses[0];
  let responsesList = responses;

  test("responses has the first response", () => {
    expect(responsesList).toContain(firstResponse);
    expect(new Set(responsesList)).toContain(firstResponse);
  });
});
