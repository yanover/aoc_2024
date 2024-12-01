import { printResult, readInput } from '../utils';

let inputA: number[] = [];
let inputB: number[] = [];

// Read the input file
readInput('ex_02', './input.txt')
  .split(' ')
  .filter((x) => x !== '')
  .map((x) => x.split('\n'))
  .flatMap((x) => x)
  .forEach((v, i) => {
    return i % 2 ? inputA.push(Number(v)) : inputB.push(Number(v));
  });

/* PART A */
function part_A(listA: number[], listB: number[]) {
  return 0
}

/* PART B */
function part_B(listA: number[], listB: number[]) {
  return 0
}

printResult('Part 02 A', part_A(inputA, inputB));
printResult('Part 02 B', part_B(inputA, inputB));
