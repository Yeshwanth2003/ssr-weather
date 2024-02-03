"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = View;
var _react = _interopRequireDefault(require("react"));
var _server = _interopRequireDefault(require("react-dom/server"));
var _App = _interopRequireDefault(require("../../components/App"));
var _fs = require("fs");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function View(_ref) {
  var place = _ref.place,
    essentials = _ref.essentials;
  var page = (0, _fs.readFileSync)("".concat(process.env._rootpath, "/index.html"), "utf-8");
  // actual data to be feeded
  var feedData = {
    header: getTimeStamp(place) + " ".concat(essentials === null || essentials === void 0 ? void 0 : essentials.con),
    essentials: essentials
  };
  page = page.replace('<body><div id="root"></div></body>', "<body><div id=\"root\">".concat(_server["default"].renderToStaticMarkup( /*#__PURE__*/_react["default"].createElement(_App["default"], {
    _data: feedData
  })), "</div></body>\n      <script>\n      window._appData = ").concat(JSON.stringify(feedData), "\n      </script>")).replace("<title>Document</title>", "<title>".concat(place, "</title>"));
  return page;
}
function getTimeStamp(place) {
  var dateObj = new Date();
  var date = dateObj.getDate();
  var month = generateMonth(dateObj.getMonth());
  var day = generateDay(dateObj.getDay());
  return "".concat(day, ", ").concat(date, " ").concat(month, " | ").concat(place);
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