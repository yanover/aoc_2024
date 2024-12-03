import { printResult, readInput } from '../utils';

let input: number[][] = [];
const chunk = 5;

// Read the input file
input = readInput('ex_02', './input.txt')
  .trim()
  .split('\n')
  .map((line) => line.trim().split(' ').map(Number));

enum Direction {
  UNKNOWN = 'unknown',
  RIGHT = 'right',
  LEFT = 'left',
}

interface ResultItem {
  result: boolean,
  section: number,
  index: number
}

const computeDirection = (v1: number, v2: number): Direction =>
  v1 > v2 ? Direction.LEFT : Direction.RIGHT;

function compute(input: number[][]): ResultItem[] | undefined {
  return input.map((v: number[], i: number) => {
    let direction = Direction.UNKNOWN;
    for (let idx = 0; idx < input[i].length; idx++) {
      // Last index, everything is ok
      if (idx === input[i].length - 1) return { result: true, section: i, index: idx }
      // current number is equal to next --> break
      if (input[i][idx] === input[i][idx + 1]) return { result: false, section: i, index: idx }
      // Control the direction
      if (direction === Direction.UNKNOWN)
        direction = computeDirection(input[i][idx], input[i][idx + 1]);
      // Direction has change --> break
      const currentDirection = computeDirection(input[i][idx], input[i][idx + 1]);
      if (direction !== Direction.UNKNOWN && direction !== currentDirection) return { result: false, section: i, index: idx }
      // Control jump
      if (Math.abs(input[i][idx] - input[i][idx + 1]) > 3) return { result: false, section: i, index: idx }
    }
  })
}

/* PART A */
function part_A(input: number[][]) {
  return compute(input).filter(v => v).length
}

/* PART B */
function part_B(listA: number[], listB: number[]) {

}

printResult('Part 02 A', part_A(input))
//printResult('Part 02 B', part_B(input).filter((v) => v).length);
