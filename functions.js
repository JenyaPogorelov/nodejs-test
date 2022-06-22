/**
 * Функция генерирует html код.
 * @param {object | object[]} obj
 * @param {string} obj.id
 * @param {string} obj.name
 * @param {object} obj.settings
 * @param {string} obj.type
 * @param {object[]} obj.children
 * @returns {string}
 */
htmlGen = function htmlGen(obj) {
  let elements = '';
  let teg = '';
  let settings = '';
  let elChildren = '';
  if (obj.name === 'root-element') {
    teg = _getTeg(obj.name)
    elements = `<${teg} id=${obj.id}>${htmlGen(obj.children)}</${teg}>`
  } else {
      obj.forEach(element => {
        for (let key in element) {
          if (key === 'name') teg = _getTeg(element[key])
          if (key === 'children' && element[key].length !== 0) {
            elements += `<${teg} id=${element.id}>${htmlGen(element.children)}</${teg}>`;
          } else if (key === 'children' && element[key].length === 0) {
            elements = `<${teg} id=${element.id}>${element.settings.text}</${teg}>`;
          }
        }
      })
    return elements;
  }
  return elements;
}

/**
 * Функция возвращает название html тэга.
 * @param {string} nameTeg
 * @returns {string}
 * @private
 */
function _getTeg(nameTeg) {
  switch (nameTeg) {
    case 'root-element':
      return 'body'
    case 'section':
      return 'section'
    case 'column':
      return 'column'
    case 'heading':
      return 'heading'
    default:
      return 'div'
  }
}

// _parseObject = function (obj) {
//   let elements = '';
//   if (obj.type === 'root-element') {
//     elements = `<body id=${obj.id}>\n</body>`;
//   } else {
//     obj.forEach((element) => {
//       elements += `<${element.name} id=${element.id}></${element.name}>`;
//     })
//     // return `<${obj.name} id=${obj.id}></${obj.name}>`;
//   }
//   return elements
// }

module.exports.htmlGen = htmlGen;
