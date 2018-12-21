import { hexToRgb, rgbToHex } from "./colors.util";

describe("Colors Util", () => {
  describe("hexToRgb", () => {
    describe("when I convert a hex to rgb", () => {
      it("should return the correct RGB values", () => {
        expect(hexToRgb("#00FF10")).toEqual({
          blue: 16,
          green: 255,
          red: 0,
        });
      });
    });
  });

  describe("rgbToHex", () => {
    describe("when I convert rgb values to hex", () => {
      it("should return a valid hex string", () => {
        expect(rgbToHex(10, 20, 255)).toEqual("#0A14FF");
      });
    });
  });
});
