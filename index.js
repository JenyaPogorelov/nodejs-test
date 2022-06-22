const fs = require('fs');
const functions = require('./functions');

fs.readFile('data.json', {encoding: 'utf8'}, (error, data) => {
  if (error) throw new Error('Ошибка, файл не найден');
  const base = JSON.parse(data);
  // const htmlBody = functions.htmlGen(base)
  console.log(functions.htmlGen(base));
  // functions.htmlGen(base)
  // parseObject(base);

  fs.writeFile('index.html', data, (error) => {
    if (error) throw new Error('Ошибка записи в файл');
    console.log('Все Ок')
  })

});

// function parseObject (obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === 'object') {
//       parseObject(obj[key])
//     } else {
//       console.log(key, ":", obj[key]);
//     }
//   }
// }



