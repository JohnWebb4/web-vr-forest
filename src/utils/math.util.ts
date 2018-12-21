function getRandomInRange(min: number, max: number) {
  const diff = max - min;

  return Math.random() * diff + min;
}

export { getRandomInRange };
