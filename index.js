function defaultSort (a, b) {
  return a - b
}

module.exports = function checksort (array, comparator) {
  comparator = comparator || defaultSort

  for (var i = 1; i < array.length; ++i) {
    var a = array[i - 1]
    var b = array[i]

    if (comparator(a, b) > 0) return false
  }

  return true
}
