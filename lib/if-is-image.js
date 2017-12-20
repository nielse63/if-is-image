module.exports = function ifIsImage(filepath = '') {
  if (!filepath) {
    throw new TypeError('No filepath given');
  }

  if (typeof filepath !== 'string') {
    throw new TypeError('Path to image must be a string');
  }

  return Boolean(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/.test(filepath));
};