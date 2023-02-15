export function capitalize(text) {
  return text.substring(0, 1).toUpperCase() + text.substring(1);
}

export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export const monthsFull = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const weekDaysFull = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export function formatDate(d, addSec: any = false) {
  let date = new Date(d);
  if (addSec) {
    date.setSeconds(date.getSeconds() + addSec);
  }

  let hour: any = date.getHours();
  let ampm = hour < 11 ? "AM" : "PM";
  hour = hour == 0 ? 12 : hour > 12 ? hour - 12 : hour;
  hour = String(hour).padStart(2, "0");

  return `${months[date.getMonth()]} ${String(date.getDate()).padStart(
    2,
    "0"
  )}, ${date.getFullYear()} [${hour}:${String(date.getMinutes()).padStart(
    2,
    "0"
  )} ${ampm}]`;
}

export function chunkify_collection(coll, chunk_size = 100) {
  let i,
    j,
    chunk = Number(chunk_size);
  let arr = [];
  for (i = 0, j = coll.length; i < j; i += chunk) {
    arr.push(coll.slice(i, i + chunk));
  }
  return arr;
}

export function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

// add separating commas on number
export function addSeparatingCommas(number) {}

export const timeInDays = {
  day: 1,
  week: 7,
  month: 30,
  year: 365,
};

export function shiftArrayToRight(_arr) {
  let arr = JSON.parse(JSON.stringify(_arr));
  arr.unshift(arr.pop());
  return arr;
}

export function shiftArrayToLeft(_arr) {
  let arr = JSON.parse(JSON.stringify(_arr));
  arr.push(arr.shift());
  return arr;
}
