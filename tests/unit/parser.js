import { parse as parseString } from 'xml2js';

export default class XmlParser {
  static async parse(xmlString) {
    try {
      return new Promise((resolve, reject) => {
        parseString(xmlString, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    } catch (err) {
      throw new Error(`Error parsing XML: ${err}`);
    }
  }
}