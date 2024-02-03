import React from "react";
import reactDom from "react-dom/server";
import App from "../../components/App";
import { readFileSync } from "fs";

export default function View({ place, essentials }) {
  let page = readFileSync(`${process.env._rootpath}/index.html`, "utf-8");
  // actual data to be feeded
  const feedData = {
    header: getTimeStamp(place) + ` ${essentials?.con}`,
    essentials,
  };
  page = page
    .replace(
      '<body><div id="root"></div></body>',
      `<body><div id="root">${reactDom.renderToStaticMarkup(
        <App _data={feedData} />
      )}</div></body>
      <script>
      window._appData = ${JSON.stringify(feedData)}
      </script>`
    )
    .replace("<title>Document</title>", `<title>${place}</title>`);

  return page;
}
function getTimeStamp(place) {
  const dateObj = new Date();
  const date = dateObj.getDate();
  const month = generateMonth(dateObj.getMonth());
  const day = generateDay(dateObj.getDay());

  return `${day}, ${date} ${month} | ${place}`;
}
function generateMonth(_mon) {
  switch (_mon) {
    case 0:
      return "January";
      break;
    case 1:
      return "February";
      break;
    case 2:
      return "March";
      break;
    case 3:
      return "April";
      break;
    case 4:
      return "May";
      break;
    case 5:
      return "June";
      break;
    case 6:
      return "July";
      break;
    case 7:
      return "August";
      break;
    case 8:
      return "September";
      break;
    case 9:
      return "October";
      break;
    case 10:
      return "November";
      break;
    case 11:
      return "December";
      break;
    default:
      return "Jan";
  }
}
function generateDay(_day) {
  switch (_day) {
    case 0:
      return "Sunday";
      break;
    case 1:
      return "Monday";
      break;
    case 2:
      return "Tuesday";
      break;
    case 3:
      return "Wednesday";
      break;
    case 4:
      return "Thursday";
      break;
    case 5:
      return "Friday";
      break;
    case 6:
      return "Saturday";
      break;
  }
}
