'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString
    .split(';')
    .map((i) => i.trim())
    .filter((i) => i)
    .map((i) => i.split(':').map((s) => s.trim()));

  return styles.reduce((obj, p) => ({ ...obj, [p[0]]: p[1] }), {});
}

module.exports = convertToObject;
