import type { Comparator } from '../src/interface'

const defaultComparator: Comparator = (a, b) => a - b
export default function checksort <T = any>(array: T[], comparator?: Comparator) {
    if (!Array.isArray(array)) {
        throw new TypeError('Expected Array, got ' + (typeof array))
    }
    const formatComparator = comparator || defaultComparator
    for (let i = 1, length = array.length; i < length; ++i) {
        if (formatComparator(array[i - 1], array[i]) > 0) {
            return false
        }
    }
    return true
}