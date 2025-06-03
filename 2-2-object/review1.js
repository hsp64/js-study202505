/*
객체(Object) 관련 문제
사용자 프로필을 담는 객체를 만들어보세요.
이름(name), 나이(age), 이메일(email)을 속성으로 포함하세요.

    객체의 속성값을 수정하는 코드를 작성해보세요.
    위에서 만든 사용자 객체의 나이를 1살 더해보세요.

    객체에 새로운 속성을 추가해보세요.
전화번호(phoneNumber)를 추가하고 임의의 값으로 설정해보세요.

    객체의 키와 값을 하나씩 출력하는 코드를 작성해보세요.
    for...in 문을 사용해서요.

    객체 안에 객체가 들어간 구조를 만들어보세요.
    사용자 객체 안에 주소(address) 객체를 넣고, 시(city), 도로명(street)을 포함해보세요.
*/

// 사용자 프로필 객체 만들기
let user = {
  name: "홍길동",
  age: 25,
  email: "hong@example.com"
};

// 1. 객체의 속성값 수정 (나이를 1살 더하기)
user.age += 1;

// 2. 새로운 속성 추가 (전화번호)
user.phoneNumber = "010-1234-5678";

// 3. 객체의 키와 값을 하나씩 출력 (for...in 사용)
for (let key in user) {
  // address는 객체이므로 중첩된 키를 처리하기 위해 예외 처리 가능
  if (typeof user[key] === 'object') {
    console.log(`${key}:`);
    for (let subKey in user[key]) {
      console.log(`  ${subKey}: ${user[key][subKey]}`);
    }
  } else {
    console.log(`${key}: ${user[key]}`);
  }
}

// 4. 객체 안에 객체 넣기 (주소 정보 추가)
user.address = {
  city: "서울",
  street: "강남대로 123"
};

// 주소 포함 후 전체 출력 (다시 출력)
console.log("\n전체 사용자 정보:");
for (let key in user) {
  if (typeof user[key] === 'object') {
    console.log(`${key}:`);
    for (let subKey in user[key]) {
      console.log(`  ${subKey}: ${user[key][subKey]}`);
    }
  } else {
    console.log(`${key}: ${user[key]}`);
  }
}
