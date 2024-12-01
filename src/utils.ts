import * as fs from 'fs';

export function readInput(exercise: string, filename: string): string {
  return fs.readFileSync(`src/${exercise}/${filename}`, 'utf-8');
}

export function printResult(exName: string, result: number | string) {
  console.log(`Result for exercise [${exName}] : ${result}`);
}
