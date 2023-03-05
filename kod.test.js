import { getPercents } from './kod.js';

describe("tests for getPercent function", () => {
  it("correct calculation of percent", () => 
    expect(getPercents(45, 500)).toBe(225));
});

describe("tests for getPercent function", () => {
  it("correct calculation of percent this fractional numbers", () => 
    expect(getPercents(10.7, 60.5)).toBe(6.4735));
});

describe("tests for getPercent function", () => {
  it("correct calculation of percent this integer and fractional number", () => 
    expect(getPercents(18.5, 235)).toBe(43.475));
});



// corner-test

describe("tests for getPercent function", () => {
  it("correct calculation of percent this integer and fractional number", () => 
    expect(getPercents(80, NaN)).toBe(0.8));
});

describe("tests for getPercent function", () => {
  it("correct calculation of percent this integer and fractional number", () => 
    expect(getPercents(true, true)).toBe(1));
});