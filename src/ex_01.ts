import { printResult, readInput } from "./utils";

let inputA: number[] = []
let inputB: number[] = []

// Read the input file
readInput("./input_01A.txt").split(" ").filter(x => x !== "").map(x => x.split("\n")).flatMap(x => x).forEach((v, i) => {
    return i % 2 ? inputA.push(Number(v)) : inputB.push(Number(v))
})

/* PART A */
function part_A(listA: number[], listB: number[]) {
    listA = listA.sort((a, b) => a - b)
    listB = listB.sort((a, b) => a - b)
    return listA.map((v, i) => Math.abs(v - listB[i])).reduce((a, b) => a + b, 0)
}

/* PART B */
function part_B(listA: number[], listB: number[]) {
    return listA.map(x => listB.filter(y => x === y).length * x).reduce((a, b) => a + b, 0)
}

printResult('Part 01 A', part_A(inputA, inputB))
printResult('Part 01 B', part_B(inputA, inputB))
