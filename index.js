function defaultComparator (a, b) {
  return a - b
}

module.exports = function checksort (array, comparator) {
  comparator = comparator || defaultComparator

  for (var i = 1; i < array.length; ++i) {
    var a = array[i - 1]
    var b = array[i]

    if (comparator(a, b) > 0) return false
  }

  return true
}
