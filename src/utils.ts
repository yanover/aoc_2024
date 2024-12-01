import * as fs from 'fs';

export function readInput(filename: string): string {
    return fs.readFileSync(`src/${filename}`, 'utf-8');
}

export function printResult(exName: string, result: number | string) {
    console.log(`Result for exercise [${exName}] : ${result}`)
}