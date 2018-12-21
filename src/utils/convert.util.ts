function hexToNumber(hex: string) {
  return parseInt(hex, 16);
}

function numberToHex(aNumber: number, hexDigits: number = 2): string {
  const hex = aNumber.toString(16);

  if (hex.length > hexDigits) {
    return ("F" as any).repeat(hexDigits);
  }

  return ("0" as any).repeat(hexDigits - hex.length) + hex.toLocaleUpperCase();
}

export { hexToNumber, numberToHex };
