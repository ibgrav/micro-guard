import { expect, test } from "vitest";
import { isArray, isEmptyArray } from "./array.js";

const nonArrayValues = [{}, () => {}, Infinity, "test", new Set(), new Map(), null, undefined];

test("isArray", () => {
  expect(isArray([])).toBe(true);

  expect(isArray()).toBe(false);

  nonArrayValues.forEach((value) => {
    expect(isArray(value)).toBe(false);
  });
});

test("isEmptyArray", () => {
  expect(isEmptyArray([])).toBe(true);

  expect(isEmptyArray()).toBe(false);
  expect(isEmptyArray([1])).toBe(false);
});
