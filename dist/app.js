"use strict";

var _express = _interopRequireDefault(require("express"));

var _expressGraphql = require("express-graphql");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('dotenv').config();

var port = process.env.PORT || 3000;
var app = (0, _express["default"])(); // app.get('/', (req, res) => {
//     res.json({
//         msg: 'Graphql Introduction'
//     })
// });
// const schema = {};
// app.use('/graphql', graphqlHTTP({
//     graphiql : true,
//     schema
// }));

app.listen(port, function () {
  console.log('Server run in port: ', port);
});
//# sourceMappingURL=app.js.map