let element = 65; // number
element = 'A'; // == 65 string

// 자바스크립트는 정수와 실수를 모두 실수로 판단한다.
let age = 20;
console.log(typeof age);

// Infinity 0으로 나누면 에러가 나지 않는다.
console.log(age / 0);
// NaN : Not a number 숫자가 아니다.
console.log(age * '메롱');