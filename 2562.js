/*
  첫째 줄부터 아홉 번째 줄까지 한 줄에 하나의 자연수가 주어진다. 주어지는 자연수는 100 보다 작다.
*/

/* 풀이 */
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const max = Math.max(...input);
const count = input.findIndex(number => parseInt(number) === max) + 1;
console.log(max + '\n' + count);
