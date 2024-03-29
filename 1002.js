/*
  조규현의 좌표 (x1, y1)와 백승환의 좌표 (x2, y2)가 주어지고,
  조규현이 계산한 류재명과의 거리 r1과 백승환이 계산한 류재명과의 거리 r2가 주어졌을 때,
  류재명이 있을 수 있는 좌표의 수를 출력하는 프로그램을 작성하시오.
*/

/* 풀이 */
const cord = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const x1 = cord[0];
const y1 = cord[1];
const r1 = cord[2];
const x2 = cord[3];
const y2 = cord[4];
const r2 = cord[5];
const max = 10000;

if (x1 < -max || y1 < -max || x2 < -max || y2 < -max) return false;
if (x1 > max || y1 > max || x2 > max || y2 > max) return false;
if (r1 > max || r2 > max) return false;

const result = [];

function getCoordinates(start, end, x) {
  const bigNumber = Math.max(start, end);
  const smallNumber = Math.min(start, end);

  for (let i = smallNumber; i <= x; i++) {
    if (i === bigNumber + x || i === bigNumber - x) {
      if (result[0] !== i) result.push(i);
    }
  }
}

getCoordinates(x1, y1, r1);
getCoordinates(x2, y2, r2);

console.log(result.length !== Infinity ? result.length : -1);
