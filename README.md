# matrix-transposer

[![](https://travis-ci.org/jsuzuki20120311/matrix-transposer.svg?branch=master)](https://travis-ci.org/jsuzuki20120311/matrix-transposer.svg?branch=master) [![Code Climate](https://codeclimate.com/github/jsuzuki20120311/matrix-transposer/badges/gpa.svg)](https://codeclimate.com/github/jsuzuki20120311/matrix-transposer)


## Abstract
Transpose 2D array.


## License
MIT

## import
### Node.js
```javascript
var MatrixTransposer = require('matrix-transposer').default
```
### EcmaScript2015
```javascript
import MatrixTransposer from 'matrix-transposer';
```

## How to use

### Example 1

```javascript

var array = [
  [1, 2, 3],
  [4, 5, 6]
];

var result = MatrixTransposer.arrayTranspose(array);
// result
// [
//   [1, 4],
//   [2, 5],
//   [3, 6]
// ]

```

### Example 2

```javascript

var array = [
  [1],
  [4, 5, 6]
];

// option
var option = {
  referenceIndex: 1, // default: 0 
  defaultValue: 0 // default: null
};

var result = MatrixTransposer.arrayTranspose(array, option);
// result
// [
//   [1, 4],
//   [0, 5],
//   [0, 6]
// ]

```
