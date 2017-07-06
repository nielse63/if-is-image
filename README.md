# if-is-image

[![Build Status](https://travis-ci.org/nielse63/if-is-image.svg?branch=master)](https://travis-ci.org/nielse63/if-is-image)
[![Coverage Status](https://coveralls.io/repos/github/nielse63/if-is-image/badge.svg?branch=master)](https://coveralls.io/github/nielse63/if-is-image?branch=master)
[![devDependencies Status](https://david-dm.org/nielse63/if-is-image/dev-status.svg)](https://david-dm.org/nielse63/if-is-image?type=dev)
[![Code Climate](https://codeclimate.com/github/nielse63/if-is-image/badges/gpa.svg)](https://codeclimate.com/github/nielse63/if-is-image)
[![NPM version](https://badge.fury.io/js/if-is-image.svg)](http://badge.fury.io/js/if-is-image)

Check if a string, filepath, or url references an image file.

## Installation

### With `npm`

```
npm install if-is-image
```

### With `yarn`

```
yarn add if-is-image
```

### With `bower`

```
bower install if-is-image
```

## Usage

### In a node project

Import the script to your project

```js
import ifIsImage from 'if-is-image';
```

or using ES5 syntax:

```js
const ifIsImage = require('if-is-image');
```

And execute the script:

```js
const isImage = ifIsImage('path/to/file');
```

### In the browser

Reference your local script:

```html
<script src="node_modules/if-is-image/dist/if-is-image.min.js"></script>
```

Or load the script via jsdelivr:

```html
<script src="https://cdn.jsdelivr.net/npm/if-is-image@latest/dist/if-is-image.min.js"></script>
```

And execute the script:

```js
const isImage = ifIsImage('path/to/file');
```

## Contributing

Fork the repo and clone locally, then run:

```
yarn install
```

This will install the `devDependencies` packages and build the `dist` folder.

Once you've made your desired changes, make sure to write any new tests for
your feature and run the tests:

```sh
yarn run lint # lints js

yarn test     # runs test suite
```

If all tests pass, [create a pull request](https://github.com/nielse63/if-is-image/pull).
