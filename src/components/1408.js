/*
  첫째 줄에 도현이가 임무를 수행하는데 남은 시간을 문제에서 주어지는 시간의 형태 (XX:XX:XX)에 맞춰 출력한다.
*/

/* 풀이 */
function get1408(start, end) {
  const startTime = new Date(`2000-01-01T${start}`);
  const endTime = new Date(`2000-01-01T${end}`);

  let diff = endTime - startTime;
  let time, hours, minutes, second;
  time = diff / 1000 / 60 / 60;
  minutes = time % 1 * 60;
  second = Math.round(minutes % 1 * 60);

  // 10 이하의 수 인 경우 앞에 0을 붙이기
  hours = parseInt(time) < 10 ? `0${parseInt(time)}` : parseInt(time);
  minutes = parseInt(minutes) < 10 ? `0${parseInt(minutes)}` : parseInt(minutes);

  return `${hours}:${minutes}:${second}`
}

export default get1408;