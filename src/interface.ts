export type TestCase = {
    array: Array<any>,
    comparator: string,
    expected: boolean
}

export type Comparator = (a: any, b: any) => number
