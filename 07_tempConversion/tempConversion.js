const convertToCelsius = function(tempFahrenheit) {
  let result = 0;

  result = 5 / 9 * (tempFahrenheit - 32);
  result = Number(result.toFixed(1));

  return result;
};

const convertToFahrenheit = function(tempCelsius) {
  let result = 0;

  result = 9 / 5 * tempCelsius + 32;
  result = Number(result.toFixed(1));

  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
