function getRandomInRange(min: number, max: number) {
  const diff = max - min;

  return Math.random() * diff + min;
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

export { getRandomInRange, getRemainder };
