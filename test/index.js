var assert = require('assert')
var sorted = require('../')
var fixtures = require('./fixtures')
var tape = require('tape')
var comparators = {
  descending: function (a, b) { return b - a }
}

fixtures.forEach(function (f) {
  tape('returns ' + f.expected + ' for ' + f.array, function () {
    var actual = sorted(f.array, comparators[f.comparator])

    assert.strictEqual(actual, f.expected)
  })
})
