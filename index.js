const fs = require('fs');
const functions = require('./functions');
const jsonFile = './data.json';


/**
 * Функция принимает данные файла, проверяет данные и генерирует HTML файл
 * @param {object} JSONfile
 */
parseJSON = function parseJSON(JSONfile) {
  const nameFile = JSONfile.name.split('.json')[0];
  console.log(nameFile);
  // console.log(JSON.parse(JSONfile))
  fs.readFile(jsonFile, {encoding: 'utf8'}, (error, data) => {
  if (error) throw new Error('Ошибка, файл не найден');
  const base = JSON.parse(data);
  const htmlBody = functions.htmlGen(base);

  fs.writeFile('data.html', htmlBody, (error) => {
    if (error) throw new Error('Ошибка записи в файл');
    console.log('Все Ок');
  })
});
}


module.exports.parseJSON = parseJSON;


