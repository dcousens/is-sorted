# checksort

[![TRAVIS](https://secure.travis-ci.org/dcousens/checksort.png)](http://travis-ci.org/dcousens/checksort)
[![NPM](http://img.shields.io/npm/v/checksort.svg)](https://www.npmjs.org/package/checksort)

A small module to check if an Array is sorted.


## Example

``` javascript
var checksort = require('checksort')

console.log(checksort([1, 2, 3]))
// => true

console.log(checksort([3, 1, 2]))
// => false
```


## License

This library is free and open-source software released under the MIT license.
