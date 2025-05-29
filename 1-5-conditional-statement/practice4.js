let day = '일요일';

switch (day) {
    case '월요일':
    case '일요일':
        console.log('주말입니다');
        break;
    default:
        console.log('평일입니다.');
}

let weather = '눈';

switch (weather) {
    case '맑음':
        console.log('선글라스 챙기세요.');
    case '비':
        console.log('비가 오니 우산을 챙기세요.');
    case '눈':
        console.log('따듯하게 입으세요.')
        break;
    default:
        console.log('날씨 정보를 알 수 없습니다.');
}

let food = pizza;

switch (pizza) {
    case 'pizza':
        console.log(`"이탈리아 요리입니다."`);
        break;
    case 'taco':
        console.log('\"멕시코 요리입니다.\"');
        break;
    case 'sushi':
        console.log(`"일본 요리입니다.`);
        break;
    case 'baguette':
        console.log(`"프랑스 요리입니다."`);
        break;
    default:
        console.log('해당 음식에 대한 정보가 없습니다.')
}