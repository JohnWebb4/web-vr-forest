import { circularInterpolationHex, getRandomHexBetweenValues, hexToHsl, hslToHex, interpolateHex } from "./colors.util";

describe("Colors Util", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("circularInterpolationHex", () => {
    describe("when I pass an angle less than PI", () => {
      it("should calculate from hsl1 to hsl2", () => {
        expect(circularInterpolationHex("#FF00FF", "#00FF00", 0.5 * Math.PI)).toEqual("#007FFF");
      });
    });

    describe("when I pass an angle less than PI", () => {
      it("should calculate form hsl2 to hsl1", () => {
        expect(circularInterpolationHex("#FF00FF", "#00FF00", 1.5 * Math.PI)).toEqual("#007FFF");
      });
    });

  });

  describe("getRandomHexBetweenValues", () => {
    describe("when I pass two hex values", () => {
      it("should get a value in between", () => {
        Math.random = jest.fn();

        (Math.random as any).mockReturnValue(0.5);

        expect(getRandomHexBetweenValues("#AA9980", "#224F6B")).toEqual("#4A924A");
      });
    });
  });

  describe("hexToHsl", () => {
    describe("when I convert a color with high max and min colors", () => {
      it("should return the correct saturation", () => {
        expect(hexToHsl("#00FF10")).toEqual({
          hue: 123.76470588235293,
          luminance: 0.5,
          saturation: 1,
        });
      });
    });

    describe("when I convert a color with low max and min colors", () => {
      it("should return the correct saturation", () => {
        expect(hexToHsl("#001014")).toEqual({
          hue: 192,
          luminance: 0.039215686274509802,
          saturation: 1,
        });
      });
    });

    describe("when I pass a malformed hex", () => {
      it("should throw error", () => {
        expect(() => hexToHsl("111111")).toThrow("Invalid hex: 111111");
      });
    });

    describe("when greyscale", () => {
      it("should return zero saturation", () => {
        expect(hexToHsl("#111111")).toEqual({
          hue: 0,
          luminance: 0.06666666666666667,
          saturation: 0,
        });
      });
    });

    describe("when I max value is red", () => {
      it("should return the correct hue", () => {
        expect(hexToHsl("#FF0022")).toEqual({
          hue: 352,
          luminance: 0.5,
          saturation: 1,
        });
      });
    });

    describe("when I max value is green", () => {
      it("should return the correct hue", () => {
        expect(hexToHsl("#00FF22")).toEqual({
          hue: 128,
          luminance: 0.5,
          saturation: 1,
        });
      });
    });

    describe("when I max value is blue", () => {
      it("should return the correct hue", () => {
        expect(hexToHsl("#2200FF")).toEqual({
          hue: 248.00000000000003,
          luminance: 0.5,
          saturation: 1,
        });
      });
    });
  });

  describe("hslToHex", () => {
    describe("when I convert saturation is zero", () => {
      it("should return a greyscale hex", () => {
        expect(hslToHex(10, 0, 0.2)).toEqual("#333333");
      });
    });

    describe("when luminance is less than 50%", () => {
      it("should return the correct hex", () => {
        expect(hslToHex(10, 0.1, 0.4)).toEqual("#705F5C");
      });
    });

    describe("when luminance is greater than 50%", () => {
       it("should return the correct hex", () => {
        expect(hslToHex(10, 0.1, 0.6)).toEqual("#A3928F");
      });
    });

    describe("when hue is greater than 180 degrees", () => {
       it("should return the correct hex", () => {
        expect(hslToHex(185, 0.1, 0.6)).toEqual("#8FA2A3");
      });
    });
  });

  describe("interpolateHex", () => {
    it("should work", () => {
      expect(interpolateHex("#000000", "#00FF00", 0.5)).toEqual("#606020");
    });
  });
});
