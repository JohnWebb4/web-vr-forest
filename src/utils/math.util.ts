function interpolate(min: number, max: number, factor: number): number {
  const diff = max - min;

  const result = factor * diff + min;

  return result;
}

function getRandomInRange(min: number, max: number) {
  return interpolate(min, max, Math.random());
}
function getRemainder(value: number, max: number = 1) {
  let positiveValue = value;

  if (positiveValue < 0) {
    while (positiveValue < 0) {
      positiveValue += max;
    }
  } else if (positiveValue >= max) {
    while (positiveValue >= max) {
      positiveValue -= max;
    }
  }

  return positiveValue;
}

export { getRandomInRange, getRemainder, interpolate };
