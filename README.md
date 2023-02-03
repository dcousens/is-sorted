# is-sorted
[![NPM](https://img.shields.io/npm/v/is-sorted.svg)](https://www.npmjs.org/package/is-sorted)
[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

A small module to check if an Array is sorted.

## Example
``` javascript
const sorted = require('is-sorted')

console.log(sorted([1, 2, 3]))
// => true

console.log(sorted([3, 1, 2]))
// => false

// supports custom comparators
console.log(sorted([3, 2, 1], function (a, b) { return b - a }))
// => true
```

## LICENSE [MIT](LICENSE)
