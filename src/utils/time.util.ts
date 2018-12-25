function getSunAngle(date: Date): number {
  const secondsInDay = 86400000;

  return ((date.getTime() % secondsInDay) / secondsInDay - 0.25) * 2 * Math.PI;
}

export { getSunAngle };
