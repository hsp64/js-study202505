/*
let weekDay = '월요일';

if (weekDay === '월요일') {
    console.log('새로운 한 주가 시작되었습니다.');
} else if (weekDay === '수요일') {
    console.log('주중의 절반을 넘었습니다. 조금만 더 파이팅!');
} else if (weekDay === '금요일') {
    console.log('주말이 코앞입니다. 신나는 하루되세요!');
}
*/

let weekDay = '수요일';

switch (weekDay) {
    // case myName : case에는 변수말고 상수만.
    case '월요일': case 'Monday':
        console.log('새로운 한주가 시작되었습니다.');
        break;
    case '화요일':
        console.log('화이팅 오늘도 좋은 하루~');
        break;
    case '수요일':
        console.log('주중의 절반을 넘었어요!');
        break;
    case '목요일':
        console.log('거의 주말이 다왔네요.');
        break;
    case '금요일':
        console.log('주말 전 마지막 업무 화이팅!');
        break;
    default:
        console.log('즐거운 하루 보내세요!');
}