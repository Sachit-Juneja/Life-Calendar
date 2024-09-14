import { addDays } from "date-fns";

function calculateElapsedPercentage(): string {
  const birth = new Date("2005-05-13");
  const endDate = addDays(birth, 85 * 365);

  const totalDuration = endDate.getTime() - birth.getTime();
  const elapsedDuration = Date.now() - birth.getTime();

  const elapsedPercentage = (elapsedDuration / totalDuration) * 100;

  return elapsedPercentage.toFixed(2);
}

export { calculateElapsedPercentage };