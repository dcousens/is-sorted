/* global describe, it */

var assert = require('assert')
var sorted = require('../')
var fixtures = require('./fixtures')
var comparators = {
  descending: function(a, b) { return b - a }
}

describe('sorted', function() {
  fixtures.forEach(function(f) {
    it('returns ' + f.expected + ' for ' + f.array, function() {
      var actual = sorted(f.array, comparators[f.comparator])

      assert.strictEqual(actual, f.expected)
    })
  })
})
