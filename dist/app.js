"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('dotenv').config();

var port = process.env.PORT || 8083;
var app = (0, _express["default"])();
app.listen(port, function () {
  console.log('Server run in post: ', port);
});
//# sourceMappingURL=app.js.map