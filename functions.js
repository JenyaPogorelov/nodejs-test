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

module.exports.htmlGen = htmlGen;
