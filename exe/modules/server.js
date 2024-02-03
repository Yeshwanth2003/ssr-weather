"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _http = _interopRequireDefault(require("http"));
var _process$env$_port;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Server = _http["default"].createServer();
var Port = (_process$env$_port = process.env._port) !== null && _process$env$_port !== void 0 ? _process$env$_port : 80;
Server.listen(Port, function () {
  console.log("Listening on : http://dev.yesh:" + Port);
});
var _default = exports["default"] = Server;