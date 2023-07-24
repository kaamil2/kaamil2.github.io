'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.plotGET = function plotGET (req, res, next, o1, b1, t1, p1, a5) {
  Default.plotGET(o1, b1, t1, p1, a5)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
