
// 매개변수 (parameter) : 함수가 실행될 때 함수 바깥쪽에서 전달되는 값을 저장

// 언어를 전달하면 그 언어에 맞는 인사를 해주는 함수
function greet(language) {
    switch (language) {
        case '한국어' :
        console.log('안녕하세요!');
        break;
        case '영어' :
        console.log('hello');
        break;
        case '중국어' :
        console.log('따쟈하오~');
        break;
        case '일본어' :
        console.log('곤니치와');
        default :
            console.log('깨랑깨랑');
            break;
    }
}

// 함수 호출
// 함수를 호출할 때 전달된 값 -> 인수 (argument)
greet('영어');
greet('일본어');
greet();
greet('힌두어');

console.log('=========================');

// x ~ y 사이의 랜덤정수를 만들어주는 함수를 정의

function makeRandomNumber(min, y) {
    let rn= Math.floor(Math.random() * (y - min + 1)) + min;
    console.log(`생성된 정수: ${rn}`);
}

makeRandomNumber(110, 350);