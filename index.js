const fs = require('fs');
const functions = require('./functions');
const jsonFile = './data.json';


/**
 * Функция принимает данные файла, проверяет данные и генерирует HTML файл
 * @param {object} JSONfile
 */
parseJSON = function parseJSON(JSONfile) {
  const nameFile = JSONfile.name.split('.json')[0];
  const dataFile = JSONfile.data;
  const base = JSON.parse(dataFile);
  const htmlBody = functions.htmlGen(base);

  fs.writeFile(`${nameFile}.html`, htmlBody, (error) => {
    if (error) throw new Error('Ошибка записи в файл');
    console.log('Все Ок');
  })
}


module.exports.parseJSON = parseJSON;


