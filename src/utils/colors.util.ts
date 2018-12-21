import { IRGB } from "../typings/irgb";
import { hexToNumber, numberToHex } from "./convert.util";

function hexToRgb(hex: string): IRGB {
  return {
    blue: hexToNumber(hex.slice(5, 7)),
    green: hexToNumber(hex.slice(3, 5)),
    red: hexToNumber(hex.slice(1, 3)),
  };
}

function rgbToHex(red: number, green: number, blue: number): string {
  return `#${numberToHex(red)}${numberToHex(green)}${numberToHex(blue)}`;
}

export { hexToRgb, rgbToHex };
