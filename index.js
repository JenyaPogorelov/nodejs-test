const fs = require('fs');
const functions = require('./functions');

fs.readFile('data.json', {encoding: 'utf8'}, (error, data) => {
  if (error) throw new Error('Ошибка, файл не найден');
  const base = JSON.parse(data);
  const htmlBody = functions.htmlGen(base)

  fs.writeFile('index.html', htmlBody, (error) => {
    if (error) throw new Error('Ошибка записи в файл');
    console.log('Все Ок')
  })

});



