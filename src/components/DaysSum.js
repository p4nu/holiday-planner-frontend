export const DaysSum = ({days}) => {
  if (days > 0) {
    return (
      <p>Days needed for selected period: {days.toString()}</p>
    );
  }
  return (
    <p>Select the date range for your holiday!</p>
  );
}
