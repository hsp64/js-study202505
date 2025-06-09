
// 스프레드: 배열을 평탄화(해체해서 늘어놓는다) 시킨다.

const foods = ['햄버거', '콜라', '감자튀김'];
const fruits = ['오렌지', '레몬', '라임'];

// combination [ '햄버거', '콜라', '감자튀김', '오렌지', '레몬', '라임' ]
// const combination = foods.concat(fruits);
const combination = [...foods, ...fruits]; // ...은 대괄호에서 꺼내서 늘여뜨려 놓은 것이다.

console.log(combination);

// 배열 복사
const newFruits = [...fruits];

const myFavorites = ['족발', ...foods];
console.log(myFavorites);

// push : 원본 손상
const newFoods = [...foods, '치즈스틱'];
console.log(newFoods); // 새로운 뉴푸드에 푸드와 치즈스틱 추가
console.log(foods); // 원본은 그대로다