/*
  접미사 배열은 문자열 S의 모든 접미사를 사전순으로 정렬해 놓은 배열이다.
  baekjoon의 접미사는 baekjoon, aekjoon, ekjoon, kjoon, joon, oon, on, n 으로 총 8가지가 있고,
  이를 사전순으로 정렬하면, aekjoon, baekjoon, ekjoon, joon, kjoon, n, on, oon이 된다.
  문자열 S가 주어졌을 때, 모든 접미사를 사전순으로 정렬한 다음 출력하는 프로그램을 작성하시오.
*/

/* 풀이 */
const input = require('fs').readFileSync('/dev/stdin').toString();
const result = [];
let output = '';
for (let i = 0; i < input.length; i++) {
  result.push(input.substr(i))
}

result.sort().map((v, index) => {
  const br = index === result.length - 1 ? '' : '\n';
  output += v + br;
});
console.log(output);
