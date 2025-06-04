function repeatString(string, num) {
    let result = '';
    for (let i = 0; i < num; i++) {
        result += string;
    }
    console.log(result);
}
// 함수 호출 코드
let result1 = repeatString("안녕", 3);
console.log(`result1: ${result1}`); // 예상 결과: "안녕안녕안녕"

let result2 = repeatString("짝", 5);
console.log(`result2: ${result2}`); // 예상 결과: "짝짝짝짝짝"