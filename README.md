# if-is-image

[![Build Status](https://travis-ci.org/nielse63/if-is-image.svg?branch=master)](https://travis-ci.org/nielse63/if-is-image)
[![Coverage Status](https://coveralls.io/repos/github/nielse63/if-is-image/badge.svg?branch=master)](https://coveralls.io/github/nielse63/if-is-image?branch=master)
[![devDependencies Status](https://david-dm.org/nielse63/if-is-image/dev-status.svg)](https://david-dm.org/nielse63/if-is-image?type=dev)
[![Code Climate](https://codeclimate.com/github/nielse63/if-is-image/badges/gpa.svg)](https://codeclimate.com/github/nielse63/if-is-image)
[![NPM version](https://badge.fury.io/js/if-is-image.svg)](http://badge.fury.io/js/if-is-image)
[![npm](https://img.shields.io/npm/dt/if-is-image.svg?style=flat-square)](https://www.npmjs.com/package/if-is-image)
[![Greenkeeper badge](https://badges.greenkeeper.io/nielse63/if-is-image.svg)](https://greenkeeper.io/)

Check if a string, filepath, or url references an image file.

## Installation

### With `npm`

```bash
npm install if-is-image
```

### With `yarn`

```bash
yarn add if-is-image
```

## Usage

### In a node project

Import the script to your project

```js
import ifIsImage from 'if-is-image';
// or
const ifIsImage = require('if-is-image');
```

And execute the script:

```js
const isImage = ifIsImage('path/to/file');       // false
const isImage = ifIsImage('path/to/image.jpg');  // true
const isImage = ifIsImage('path/to/image.webp'); // true
const isImage = ifIsImage({});                   // throw: Path to image must be a string
```

## Contributing

Fork the repo and clone locally, then run:

```bash
yarn install
```

This will install the `devDependencies` packages and build the `lib` folder.

Once you've made your desired changes, make sure to write any new tests for
your feature and run the tests:

```bash
yarn run lint # lints js
yarn test     # runs test suite
```

If all tests pass, [create a pull request](https://github.com/nielse63/if-is-image/pulls).
