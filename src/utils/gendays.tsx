import { addDays, format, isPast, isToday } from "date-fns";
import { days } from "../days";

interface DayObject {
  date: string;
  past: boolean;
  today: boolean;
  birthday: boolean;
  url?: string;
  summary?: string;
}

function generateDateArray(): DayObject[] {
  const startDate = new Date("2005-05-13");
  const endDate = addDays(startDate, 85 * 365); // Add 85 years worth of days
  const dateArray: DayObject[] = [];
  
  for (let currentDate = startDate; currentDate <= endDate; currentDate = addDays(currentDate, 1)) {
    const dateString = format(currentDate, "yyyy-MM-dd");
    const humanReadableDate = format(currentDate, "do MMMM yyyy");
    const past = isPast(currentDate);
    const today = isToday(currentDate);
    const birthday = currentDate.getDate() === 13 && currentDate.getMonth() === 4; // Month is 0-based
    
    // Lookup day details
    const dayDetails = days[dateString] || {};
    const { url, summary } = dayDetails;
    
    dateArray.push({
      date: humanReadableDate,
      url,
      past,
      today,
      summary,
      birthday,
    });
  }
  
  return dateArray;
}

export { generateDateArray };
