const regexPatterns = require('./regex-patterns');

function parseString(inputString, format) {
  const pattern = regexPatterns[format];
  if (!pattern) {
    throw new Error(`Invalid format: ${format}`);
  }

  const match = inputString.match(pattern);
  if (!match) {
    return null;
  }

  const parsedData = {};
  match.forEach((value, index) => {
    parsedData[Object.keys(pattern)[index]] = value;
  });

  return parsedData;
}

module.exports = parseString;