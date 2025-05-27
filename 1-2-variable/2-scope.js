
let number = 10;

// 변수는 중복으로 선언 불가능
// let number = 20;


// 블록 레벨 스코프를 지원 (블록 별로 따로따로)
if (true) {
    let nuber = 30;
    console.log(`number in if : #{number}`);
}

console.log(`number in main : ${number}`);