
const student = {
    stuName: '뽀로로',
    age: 5,
    birthDay: '2020-01-01'
};
/*
const name = student.stuName;
const age = student.age;
const birth = student.birthDay;
*/
// 반드시 키 이름으로 지정해야한다.

const stuName = '김철수';
// 이미 stuName이란 변수가 있다면 똑같은 키 이름에 : 를 붙여 재 설정한다
const {stuName: name, age, birthDay} = student;

console.log(`학생의 이름은 ${name}이고, 나이는${age}이고, 생일은 ${birthDay}이다.`);

const divStyle = {
    'font-size' : '16px',
    'border-radius': '50%'
};
console.log(divStyle['font-size']); // 대괄호를 써야한다

// : 을 붙여 재설정하여 출력할수 있다.
const { 'font-size':fontSize, 'border-radius': radius} = divStyle;
console.log(fontSize);
console.log(radius);

console.log('=========================');

// const {name, age} = myPet;

function myPetInfo ({name, age}) {
    console.log(`우리 애완동물의 이름은 ${name}입니다.`);
    console.log(`우리 애완동물의 나이는 ${age}입니다.`);
}

// 재사용 가능
const cat = {
    name: '나비',
    age: 7,
    kind: '러시안블루',
    injection: true
}

// 재사용 불가능 : 변수에 담아두지 않았기 때문에
myPetInfo({
    name: '초코',
    age: '3'
})

const {kind, injection, ...basicInfo} = cat;

console.log(basicInfo);