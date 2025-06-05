const userList = [
    {
        account: 'abc1234',
        userName: '대길이',
        job: '추노',
        address: '서울',
        hobbys: ['수영', '축구', '테니스'],
        salary: 5400000,
        age: 35,
    },
    {
        account: 'banana',
        userName: '빠나나',
        job: '과일',
        address: '서울',
        hobbys: ['푸드파이팅', '테니스'],
        salary: 9700000,
        age: 18,
    },
    {
        account: 'park1234',
        userName: '주차왕',
        job: '발렛파킹',
        address: '경기',
        hobbys: ['족구', '축구', '테니스', '영화감상'],
        salary: 3900000,
        age: 56,
    },
    {
        account: 'fire',
        userName: '불꽃남자카리스마',
        job: '게이머',
        address: '서울',
        hobbys: ['독서', '테니스'],
        salary: 1900000,
        age: 42,
    },
];


function every(callback) {
    for (const user of userList) {
        if (!callback(user)) {
            return false;
        }
    }
    return true;
}

// 모든 사용자가 서울에 사는가?
const result1 = every(user => user.address === '서울');  // false
console.log(result1);

// 모든 사용자의 취미가 1개 이상인가?
const result2 = every(user => user.hobbys.length > 0);  // true
console.log(result2);

console.log('=========================');

function some(callback) {
    for (const user of userList) {
        if (callback(user)) {
            return true;
        }
    }
    return false;
}

// 이름에 '왕'이 포함된 사람이 있는가?
const result3 = some(user => user.userName.includes('왕')); // true
console.log(result3);
// 부산에 사는 사용자가 있는가?
const result4 = some(user => user.address === '부산'); // false
console.log(result4);

console.log('=========================');


function none(callback) {
    for (const user of userList) {
        if (callback(user)) {
            return false;
        }
    }
    return true;
}

// '게임'이라는 취미를 가진 사용자가 없는가?
const result5 = none(user => user.hobbys.includes('게임')); // true
console.log(result5);

// 서울에 사는 사용자가 아무도 없는가?
const result6 = none(user => user.address === '서울'); // false
console.log(result6);

console.log('=========================');

function custom(userArray, callback, type) {
   switch (type) {
    case 'filter' :
        return userArray.filter(callback);
    case 'map' :
        return userArray.map(callback);
    case 'every' :
        return userArray.every(callback);
    case 'some':
        return userArray.filter(callback);
       default:
           console.log('고생맨');
    }
}


const result7 = custom(userList, user => user.hobbys.length === 2, 'filter');
const result8 = custom(userList, user => user.job, 'map');
const result9 = custom(userList, user => user.address === '서울', 'every');
const result10 = custom(userList, user => user.userName.includes('왕'), 'some');
console.log(result7);
console.log('=========================');
console.log(result8);
console.log('=========================');
console.log(result9);
console.log('=========================');
console.log(result10);

function map(array, callback) {
    const mappedArray = [];
    for (const element of array) {
        const element = callback(user);
        mappedArray.push(element);
    }
    return mappedArray;
}


function p(array, callback) {
    const pp = [];
    for (const element of array) {
        if (callback(element)) {
            const item = element.userName
            pp.push(item);
        }
    }return pp;
}
console.log('=========================');
const resultQ = p(userList,element => element.address === '서울' && element.hobbys.length === 2);
    console.log(resultQ);