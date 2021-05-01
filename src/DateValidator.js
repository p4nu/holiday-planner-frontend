import {map, includes} from "lodash";
import {format} from "date-fns";

export const isValidDateRange = dates => {
  if (dates.length > 50) {
    alert('Dates cannot be used more than 50 at a time!');

    return false;
  }

  const formattedDates = map(dates, date => format(date, 'ddMM'));

  if (includes(formattedDates, '3103') && includes(formattedDates, '0104')) {
    alert('Time span has to be within the same holiday period!');

    return false;
  }

  return true;
};
