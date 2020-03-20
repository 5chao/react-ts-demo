const sum = (...args: number[]): number => {
    let res: number = 0
    for (let i of args) {
        res += i
    }
    return res
}

const times = (a: any, b: any): any => {
    let resArr = (new Array(b)).fill(a)
    return sum(...resArr)
}

export default { sum, times}