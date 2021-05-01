import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import {useState} from "react";
import {eachDayOfInterval} from "date-fns";
import {isValidDateRange} from "./validators/DateValidator";
import {Title} from "./components/Title";
import {DaysSum} from "./components/DaysSum";
import {filterDates} from "./helpers/DateFilter";

function App() {
  const [dates, setDates] = useState([new Date(), new Date()]);
  const [days, setDays] = useState(0);

  const handleDateChange = (newDates) => {
    const interval = eachDayOfInterval({
      start: newDates[0],
      end: newDates[1],
    });

    if (!isValidDateRange(interval)) {
      setDays(-1);
      return;
    }

    const filteredDates = filterDates(interval);

    setDates(newDates);
    setDays(filteredDates.length);
  }

  return (
    <>
      <Title heading='Holiday planner'/>

      <DateRangePicker
        onChange={handleDateChange}
        value={dates}
      />

      <DaysSum days={days}/>
    </>
  );
}

export default App;
