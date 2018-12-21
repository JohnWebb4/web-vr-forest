import { hexToNumber, numberToHex } from "./convert.util";

describe("Convert Utility", () => {
  describe("hexToNumber", () => {
    describe("when I pass a hex", () => {
      it("should convert it to a number", () => {
        expect(hexToNumber("FF")).toEqual(255);
      });
    });
  });

  describe("numberToHex", () => {
    describe("when I convert a number taking up more digits", () => {
      it("should max value to number of digits", () => {
        expect(numberToHex(3000, 2)).toEqual("FF");
      });
    });

    describe("when I convert a number taking up fewer digits", () => {
      it("should pad appropriate number of leading zeros", () => {
        expect(numberToHex(1, 2)).toEqual("01");
      });
    });

    describe("when I convert a number with exact number of hex digits", () => {
      it("should convert number to hex", () => {
        expect(numberToHex(100, 2)).toEqual("64");
      });
    });

    describe("when I ommit the number of digits", () => {
      it("assumes two hex digits", () => {
        expect(numberToHex(100)).toEqual("64");
      });
    });

    describe("when hex value uses letters", () => {
      it("should be upper case", () => {
        expect(numberToHex(254, 2)).toEqual("FE");
      });
    });
  });
});
