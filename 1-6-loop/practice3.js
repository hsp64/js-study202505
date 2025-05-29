let numIndex = +prompt(`정수를 입력하세요.`);
let result = '';


for (let i = 2; i < numIndex; i *= 2) {
    result += `${i} `;
    // i;
}
alert(`${result}`);