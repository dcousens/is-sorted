module.exports = function checksort (array, comparator = (a,b)=>a-b) {
  if (!Array.isArray(array)) throw new TypeError('Expected Array, got ' + (typeof array))

  for (var i = 1, length = array.length; i < length; ++i) {
    if (comparator(array[i - 1], array[i]) > 0) return false
  }

  return true
}
