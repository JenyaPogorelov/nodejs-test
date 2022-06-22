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
    for (let key in obj) {
      if (key === 'name') teg = _getTeg(obj[key])
      if (key === 'children' && obj[key].length !== 0) {
        obj[key].forEach((element, id) => {
          // console.log('element', id)
          // elChildren += `<${teg} id=${obj.id}>${htmlGen(element)}</${teg}>`;
          elements = `<${teg} id=${obj.id}>${htmlGen(obj[key][id])}</${teg}>`;
          // console.log('elChildren', elChildren)
        })
        return elements;
        // elements = `<${teg} id=${obj.id}>${htmlGen(obj[key][0])}</${teg}>`;
      } else if (key === 'children' && obj[key].length === 0) {
        return `<${teg} id=${obj.id}></${teg}>`;
      }
    }
    return elements;
  }
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
