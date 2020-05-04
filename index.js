module.exports = function checksort (array, comparator) {
    if(!Array.isArray(array)) throw new TypeError('Expected Array, got ' + (typeof array));
    const defaultComparator = (a, b) => a < b;
    
    comparator = comparator || defaultComparator;
    const illegal = array.find((i, index) => {
        if(index === array.length - 1) return false;
        return !comparator(array[index], array[index+1]);
    });
    return illegal === undefined;
}
