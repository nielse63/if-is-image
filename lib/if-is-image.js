(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ifIsImage;
function ifIsImage(filepath) {
  if (typeof filepath !== 'string') {
    throw new TypeError('Path to image must be a string');
  }
  return (/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/.test(filepath)
  );
}

})));
