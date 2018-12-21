import { getRandomInRange } from "./math.util";

Math.random = jest.fn();

describe("Math Util", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("getRandomInRange", () => {
    describe("when I get a random value in a range", () => {
      it("should be able to return bottom of range", () => {
        (Math.random as any).mockReturnValue(0);

        expect(getRandomInRange(-5, 5)).toEqual(-5);
      });

      it("should be able to return any value in range", () => {
        (Math.random as any).mockReturnValue(0.5);

        expect(getRandomInRange(-5, 5)).toEqual(0);
      });
    });
  });
});
