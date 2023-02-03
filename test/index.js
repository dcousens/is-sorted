const sorted = require('../')
const fixtures = require('./fixtures')
const tape = require('tape')
const comparators = {
  descending: function (a, b) { return b - a }
}

for (const f of fixtures)  {
  tape('returns ' + f.expected + ' for ' + f.array, function (t) {
    t.plan(1)

    const actual = sorted(f.array, comparators[f.comparator])
    t.equal(actual, f.expected)
  })
}

tape('throws on non-Array inputs', function (t) {
  t.plan(1)
  t.throws(function () {
    sorted('foobar')
  }, /Expected Array, got string/)
})
