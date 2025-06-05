
const userList = [
    {
        account: 'abc1234',
        userName: '대길이',
        job: '추노',
        address: '서울',
        hobbies: ['수영', '축구', '테니스'],
    },
    {
        account: 'banana',
        userName: '빠나나왕',
        job: '과일',
        address: '서울',
        hobbies: ['푸드파이팅', '테니스'],
    },
    {
        account: 'park1234',
        userName: '주차왕',
        job: '발렛파킹',
        address: '경기',
        hobbies: ['족구', '축구', '테니스', '영화감상'],
    },
    {
        account: 'fire',
        userName: '불꽃남자카리스마',
        job: '게이머',
        address: '서울',
        hobbies: ['독서', '테니스'],
    },
];

// 회원목록에서 취미가 딱 2개인 사람들만 추려서
// 새 배열에 다시 담아주세요.
const newUserList = [];
for (const user of userList) {
    if (user.hobbies.length === 2) {
        newUserList.push(user);
    }
}

console.log(newUserList);



