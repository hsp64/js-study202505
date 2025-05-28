
let userName = prompt(`당신의 이름은?`);
let userAge = prompt('당신의 나이는?');


// 출생년도 구하기
let currentYear = new Date().getFullYear();
let koreanAgeMarker = 1;
let birthYear = currentYear - +userAge + koreanAgeMarker;

alert(`${userName}님 당신은 ${birthYear}년 생이시군요!`);