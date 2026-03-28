const { createParser } = require('fast-xml-parser');

const parser = createParser({
  ignoreAttributes: false,
  attributeNamePrefix: '',
  allowBooleanAttributes: true,
  parseTrueNumberOnly: true,
  trimValues: true,
  cdataTagName: '__cdata',
  cdataPositionChar: '\\c',
  parseAttributeValue: true,
  tagValueProcessor: (val, tagName) => {
    if (tagName === 'url') return val.startsWith('/') ? val : `https://${val}`;
    return val;
  },
});

module.exports = {
  parser,
};