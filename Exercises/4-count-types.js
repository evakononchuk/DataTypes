'use strict';

const array = [true, 'hello', 5, 12, -200, false, false, 'word'];

const countTypesInArray = array => {
const quant = {};
  for(const value of array) {
    const type = typeof value;
    quant[type] = ++quant[type] || 1;
  }
  return quant;
};

module.exports = { countTypesInArray };