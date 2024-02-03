"use strict";

var _server = _interopRequireDefault(require("./modules/server"));
var _controller = _interopRequireDefault(require("./modules/controller/controller"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_server["default"].on("request", _controller["default"]);