let score = +prompt(`점수를 입력하세요.`);
if (score >= 90) {
      alert(`A`);
    } else if (score >= 80) {
      alert(`B`);
    } else if (score >= 70) {
        alert(`C`);
    } else if (score >= 60) {
        alert(`D`)
    } else {
    alert(`F`);
}

// 90점이상 A
// 80점이상 B
// 70 -> C
// 60 -> D
// 나머지 -> F

// 변수를 사용하여 마지막에 출력
let score = +prompt('점수를 입력하세요');

let grade;
if (score >= 90) {
    grade = 'A';
} else if (score >= 80) {
    grade = 'B';
} else if (score >= 70) {
    grade = 'C';
} else if (score >= 60) {
    grade = 'D';
} else {
    grade = 'F';
}

alert(grade); // 예상 출력: A