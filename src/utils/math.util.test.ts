import { getRandomInRange, getRemainder } from "./math.util";

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

  describe("getPositiveRemainder", () => {
    describe("when I get a remainder less than zero", () => {
      it("should return positive remainder", () => {
        expect(getRemainder(-5.5, 1)).toEqual(0.5);
      });
    });

    describe("when I get a remainder greater than max", () => {
      it("should return positive remainder", () => {
        expect(getRemainder(5.5, 1)).toEqual(0.5);
      });
    });

    describe("when I get a remainder between zero and max", () => {
      it("should return positive remainder", () => {
        expect(getRemainder(0.5, 1)).toEqual(0.5);
      });
    });

    describe("when I ommit the max value", () => {
      it("should assume 1", () => {
        expect(getRemainder(0.5)).toEqual(0.5);
      });
    });
  });
});
