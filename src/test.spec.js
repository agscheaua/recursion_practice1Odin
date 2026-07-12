import { mergeSort } from "./index.js";

describe("mergin array test", () =>{
  test.skip("empty array", () => {
    expect(mergeSort([])).toEqual([]);
  });
  test.skip("one element array", () => {
    expect(mergeSort([73])).toEqual([73]);
  });
   test.skip("multiple elements already sorted array", () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
   test("multiple elements unsorted array", () => {
    expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });
   test.skip("multiple elements unsorted array", () => {
    expect(mergeSort([105, 79, 100, 110])).toEqual([79, 100, 105, 110]);
  });
});
