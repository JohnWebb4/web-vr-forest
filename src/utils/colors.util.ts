import { IHSL } from "../typings/ihsl";
import { IRGB } from "../typings/irgb";
import { hexToNumber, numberToHex } from "./convert.util";
import { getRemainder } from "./math.util";

function hexToHsl(hex: string): IHSL {
  const { red, green, blue} = hexToRgb(hex);

  return rgbToHsl(red, green, blue);
}

function hslToHex(hue: number, saturation: number, luminance: number): string {
  const { red, green, blue } = hslToRgb(hue, saturation, luminance);

  return rgbToHex(Math.round(red), Math.round(green), Math.round(blue));
}

function hexToRgb(hex: string): IRGB {
  if (hex[0] !== "#") {
    throw new Error(`Invalid hex: ${hex}`);
  }

  return {
    blue: hexToNumber(hex.slice(5, 7)),
    green: hexToNumber(hex.slice(3, 5)),
    red: hexToNumber(hex.slice(1, 3)),
  };
}

function rgbToHex(red: number, green: number, blue: number): string {
  return `#${numberToHex(red)}${numberToHex(green)}${numberToHex(blue)}`;
}

function rgbToHsl(red: number, green: number, blue: number): IHSL {
  const perRed = red / 255;
  const perGreen = green / 255;
  const perBlue = blue / 255;

  const minRGB = Math.min(perRed, perGreen, perBlue);
  const maxRGB = Math.max(perRed, perGreen, perBlue);

  const luminance = (maxRGB + minRGB) / 2;

  const diffMaxAndMin = maxRGB - minRGB;

  let saturation = 0;

  if (diffMaxAndMin >= 0.5) {
    saturation = (maxRGB - minRGB) / (2 - maxRGB - minRGB);
  } else if (diffMaxAndMin < 0.5 && diffMaxAndMin > 0) {
    saturation = (maxRGB - minRGB) / (maxRGB + minRGB);
  }

  if (saturation === 0) {
    return {
      hue: 0,
      luminance,
      saturation,
    };
  }

  let hue = 0;

  if (maxRGB === perRed) {
    hue = (perGreen - perBlue) / (maxRGB - minRGB);
  } else if (maxRGB === perGreen) {
    hue = 2 + (perBlue - perRed) / (maxRGB - minRGB);
  } else {
    hue = 4 + (perRed - perGreen) / (maxRGB - minRGB);
  }

  hue = hue * 60; // deg

  hue = getRemainder(hue, 360);

  return {
    hue,
    luminance,
    saturation,
  };
}

function hslToRgb(hue: number, saturation: number, luminance: number): IRGB {
  const perHue = hue / 360;

  if (saturation === 0) {
    const greyColor = luminance * 255;
    return {
      blue: greyColor,
      green: greyColor,
      red: greyColor,
    };
  }

  let temp1;

  if (luminance < 0.5) {
    temp1 = luminance * (1 + saturation);
  } else {
    temp1 = luminance + saturation - luminance * saturation;
  }

  const temp2 = 2 * luminance - temp1;

  const tempRed = getRemainder(perHue + 1 / 3);
  const tempGreen = getRemainder(perHue);
  const tempBlue = getRemainder(perHue - 1 / 3);

  return {
    blue: getPercentChannel(tempBlue, temp1, temp2) * 255,
    green: getPercentChannel(tempGreen, temp1, temp2) * 255,
    red:  getPercentChannel(tempRed, temp1, temp2) * 255,
  };
}

function getPercentChannel(tempColor: number, temp1: number, temp2: number): number {
  if (6 * tempColor < 1) {
    return temp2 + 6 * (temp1 - temp2) * tempColor;
  }

  if (2 * tempColor < 1) {
    return temp1;
  }

  if (3 * tempColor < 2) {
    return temp2 + 6 * (temp1 - temp2) * (2 / 3 - tempColor);
  }

  return temp2;
}

export { hexToHsl, hslToHex };
