import {adjuster} from "./Adjuster";

describe("adjuster", () => {
    test("empty", () => {
        expect(adjuster([])).toEqual([]);
    });
});
