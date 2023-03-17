import { DateTime } from 'luxon';
function Time() {
  return (
    <div>
      <h1 className=" text-3xl font-bold text-violet-300 underline  ">
        Hello world!
      </h1>
      <div>{DateTime.now().toLocaleString()}</div>
      <div>{DateTime.now().plus({ months: 1 }).toISODate()}</div>
    </div>
  );
}

export default Time;
