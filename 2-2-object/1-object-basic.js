// 우리 집 강아지 2마리 - 초코, 해피
let dogName1 = '초코';
let dogName2 = '해피';
let dogAge1 = 3;
let puppyAge2 = 5;
let tall1 = 30;
let height2 = 45;
let inject = false;
let inject2 = true;

// 객체
let myDog1 = {
    name: '초코',
    age: 3,
    tall: 30,
    weight: 10,
    injection: false,
    vegetarian: true,
    favorite: ['산책', '간식']
};
let myDog2 = { // 순서가 달라도 된다
    name: '해피',
    age: 5,
    tall: 45,
    weight: 14,
    favorite: ['꼬리흔들기', '뒷발로차기', '초코괴롭히기'],
    injection: true,
    vegetarian: false
};

// 객체 프로퍼티 참조법
console.log(myDog1.name);
console.log(myDog2.name);
console.log(myDog2.age);

console.log(typeof myDog1);
console.log(typeof myDog1.name);
console.log(typeof myDog1.injection);
console.log(typeof myDog1.favorite);
console.log(typeof myDog1.favorite[1]);

myDog2.age++;
myDog1.tall **= 2;

myDog1.favorite.push('메롱메롱');
// myDog2.pop(); // 배열에 사용하는 pop은 객체에 불가능
// myDog.favorite[0]--; 문자열에 감소는 불가능

console.log('=========================');

// 프로퍼티 참조법 2
console.log(myDog2.name);
console.log(myDog2['name']);
// console.log(myDog2[age]); 숫자에도 ''따옴표를 넣어야한다. 문자열로 해야한다.

let height = 'tall';
console.log(myDog1[height]);

console.log('=========================');
let key = 'age';

console.log(myDog2[key]); // 변수값으로 key를 적용하려면 [] 를 넣어야한다.

let myCat = {
    name: '나비',
    age: 4,
    'my-hobby': '시비걸기'
};

let divStyle = {
    color: 'red',
    background: 'orange',
    'font-size': '16px',
};

console.log(divStyle['color']);
console.log(divStyle['font-size']);
