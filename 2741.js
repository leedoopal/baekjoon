/*
  자연수 N이 주어졌을 때, 1부터 N까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.
*/

/* 풀이 */
const n = require('fs').readFileSync('/dev/stdin').toString()

//TODO:: 시간초과로 실패했어요ㅠㅅㅠ
let x = 0;
while (x < n) {
  x++;
  console.log(x);
}
