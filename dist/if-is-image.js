'use strict';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pZi1pcy1pbWFnZS5qcyJdLCJuYW1lcyI6WyJpZklzSW1hZ2UiLCJmaWxlcGF0aCIsIlR5cGVFcnJvciIsInRlc3QiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUN3QkEsUztBQUFULFNBQVNBLFNBQVQsQ0FBbUJDLFFBQW5CLEVBQTZCO0FBQzFDLE1BQUksT0FBT0EsUUFBUCxLQUFvQixRQUF4QixFQUFrQztBQUNoQyxVQUFNLElBQUlDLFNBQUosQ0FBYyxnQ0FBZCxDQUFOO0FBQ0Q7QUFDRCxTQUFPLHNDQUFxQ0MsSUFBckMsQ0FBMENGLFFBQTFDO0FBQVA7QUFDRCIsImZpbGUiOiJpZi1pcy1pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaWZJc0ltYWdlKGZpbGVwYXRoKSB7XG4gIGlmICh0eXBlb2YgZmlsZXBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUGF0aCB0byBpbWFnZSBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gIH1cbiAgcmV0dXJuIC9cXC4ocG5nfGpwZT9nfGdpZnx3ZWJwfHN2ZykoXFw/LiopPyQvLnRlc3QoZmlsZXBhdGgpO1xufVxuIl19