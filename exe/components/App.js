"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = App;
var _react = _interopRequireDefault(require("react"));
var _Body = _interopRequireDefault(require("./Body"));
var _Header = _interopRequireDefault(require("./Header"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function App(_ref) {
  var _data = _ref._data;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "app"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "app-decorative"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "app-container"
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    date_place: _data.header
  }), /*#__PURE__*/_react["default"].createElement(_Body["default"], {
    essentials: _data.essentials
  }))));
}