function defaultComparator(a, b) {
  return a - b
}

function isFun(fun) {
  return Object.prototype.toString.call(fun) === '[object Function]'
}

module.exports = function checksort(array, comparator) {
  if (!Array.isArray(array)) throw new Error('is-sorted: expects an array as the first argument.');
  
    if (array.length < 1) return true
  
    comparator = comparator || defaultComparator
    if(!isFun(comparator)) throw new Error('is-sorted: make sure the second parameter is the function.');

  for (var i = 1, length = array.length; i < length; ++i) {
    if (comparator(array[i - 1], array[i]) > 0) return false
  }

  return true
}
