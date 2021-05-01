import {includes, map} from "lodash";
import {FinnishHolidaysEnum} from "../enums/FinnishHolidaysEnum";
import {format, isSunday, parseISO} from "date-fns";

export const filterDates = interval => {
  const formattedHolidays = map(FinnishHolidaysEnum, date => {
    return format(date, 'Y-MM-dd');
  });

  const formattedDates = interval.map(date => {
    return format(date, 'Y-MM-dd');
  });

  return formattedDates.filter(date => !isSunday(parseISO(date)) && !includes(formattedHolidays, date));
}
