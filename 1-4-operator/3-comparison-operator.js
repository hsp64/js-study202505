let a = 5;  //00000101
let b = '5'; // 53

//  js에서 모든 동등, 비동등 비교는 ===, !== 으로 해야함
console.log(a === b);
console.log(a !== b);

// == 은 직관적으로 결과 예측이 힘듬
console.log('0' == '');
console.log(0 == '');
console.log('0' == 0);
console.log(false == 'false');
console.log(false == 0);

console.log('=========================');

// 문자 비교
let password = 'abc1234';

console.log(password === 'abc1234');

// 문자 대소 비교
//          97     65
console.log('a' < 'A');
console.log('B' < 'c');
//                 44032 가각간갇갈감갑~힣 한글 유니코드는 갱쟝히 높다
console.log('z' < '가');
//     97 99 101  < 99 100 101
console.log('ace' < 'ade');