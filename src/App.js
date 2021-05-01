import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import {useState} from "react";
import {eachDayOfInterval, isSaturday, isSunday} from "date-fns";

function App() {
  const [dates, setDates] = useState([new Date(), new Date()]);
  const [days, setDays] = useState(0);

  const handleDateChange = (newDates) => {
    setDates(newDates);

    const interval = eachDayOfInterval({
      start: newDates[0],
      end: newDates[1],
    });

    const filteredDates = interval.filter(date => !isSunday(date) && !isSaturday(date));

    console.log(filteredDates);
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
