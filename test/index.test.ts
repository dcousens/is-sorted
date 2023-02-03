import type { TestCase, Comparator } from '../src/interface'

import isSorted from '../src/index'
import fixtures from './fixtures.json'
import { describe, it, expect } from 'vitest'

const comparators: Record<string, Comparator> = {
    descending: (a, b) => b - a
};

describe('happy path', () => {
    (fixtures as TestCase[]).forEach(testCase => {
        it('correct test', () => {
            expect(isSorted(testCase.array, comparators[testCase.comparator])).toBe(testCase.expected)
         })
    })

    it('throws on non-Array inputs', () => {
        expect(() => isSorted('foobar' as unknown as [])).toThrowError(
            /^Expected Array, got string$/,
          )
    })
})
