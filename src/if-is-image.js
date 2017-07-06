
export default function ifIsImage(filepath) {
  if (typeof filepath !== 'string') {
    throw new TypeError('Path to image must be a string');
  }
  return /\.(png|jpe?g|gif|webp|svg)(\?.*)?$/.test(filepath);
}
