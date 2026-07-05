import { mergeSort } from "./index.js";

describe("mergin array test", () =>{
  test("empty array", () => {
    expect(mergeSort([])).toBe([]);
  });
  test.skip("one element array", () => {
    expect(mergeSort([73])).toBe([73]);
  });
   test.skip("multiple elements already sorted array", () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toBe([1, 2, 3, 4, 5]);
  });
   test.skip("multiple elements unsorted array", () => {
    expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toBe([0, 1, 1, 2, 3, 5, 8, 13]);
  });
   test.skip("multiple elements unsorted array", () => {
    expect(mergeSort([105, 79, 100, 110])).toBe([79, 100, 105, 110]);
  });
});
