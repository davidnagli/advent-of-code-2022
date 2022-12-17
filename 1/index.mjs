import fs from 'fs';

const file = fs.readFileSync('input.txt', 'utf8');
const rawElves = file.split('\n\n');
let parsedElves = rawElves.map((elf) =>
  elf.split('\n').map((line) => Number(line))
);
let totalsPerElf = parsedElves.map((elf) => elf.reduce((a, b) => a + b, 0));
let sortedTotalsPerElf = totalsPerElf.sort((a, b) => b - a);

console.log(sortedTotalsPerElf.slice(0, 3).reduce((a, b) => a + b, 0));
