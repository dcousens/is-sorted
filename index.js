function defaultComparator(a, b) {
  return a - b
}

function isFun(fun) {
  return Object.prototype.toString.call(fun) === '[object Function]'
}

module.exports = function checksort(array, comparator) {
  if (!Array.isArray(array)) return false

  if (array.length < 1) return true

  comparator = comparator || defaultComparator
  comparator = (isFun(comparator)) ? comparator : defaultComparator

  for (var i = 1; i < array.length; ++i) {
    if (comparator(array[i - 1], array[i]) > 0) return false
  }

  return true
}
