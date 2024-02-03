"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Header;
var _react = _interopRequireDefault(require("react"));
var _Search = _interopRequireDefault(require("./Search"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Header(_ref) {
  var date_place = _ref.date_place;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "header-wrapper"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "header-text"
  }, /*#__PURE__*/_react["default"].createElement("h1", null, "WEATHER"), /*#__PURE__*/_react["default"].createElement("span", null, date_place)), /*#__PURE__*/_react["default"].createElement(_Search["default"], null)));
}