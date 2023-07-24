'use strict';


/**
 * Plot a histogram
 *
 * o1 String numeric
 * b1 String numeric
 * t1 String String
 * p1 String String
 * a5 String Boolean
 * returns Object
 **/
exports.plotGET = function(o1,b1,t1,p1,a5) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

