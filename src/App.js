import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import {useState} from "react";
import {eachDayOfInterval, format, isSunday, parseISO} from "date-fns";
import {FinnishHolidaysEnum} from "./enums/FinnishHolidaysEnum";
import {map, includes} from 'lodash';
import {isValidDateRange} from "./DateValidator";

function App() {
  const [dates, setDates] = useState([new Date(), new Date()]);
  const [days, setDays] = useState(0);

  const handleDateChange = (newDates) => {
    const interval = eachDayOfInterval({
      start: newDates[0],
      end: newDates[1],
    });

    if (!isValidDateRange(interval)) {
      return;
    }

    const formattedHolidays = map(FinnishHolidaysEnum, (date) => {
      return format(date, 'Y-MM-dd');
    });

    const formattedDates = interval.map(date => {
      return format(date, 'Y-MM-dd');
    });

    const filteredDates = formattedDates.filter(date => !isSunday(parseISO(date)) && !includes(formattedHolidays, date));

    setDates(newDates);
    setDays(filteredDates.length);
  }

  return (
    <>
      <h1>Holiday planner</h1>

      <DateRangePicker
        onChange={handleDateChange}
        value={dates}
      />

      <p>Days needed for selected period: {days.toString()}</p>
    </>
  );
}

export default App;
