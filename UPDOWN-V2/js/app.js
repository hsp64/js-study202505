// 변수 정의


const $guessInput = document.getElementById('guess-input');
const $guessBtn = document.querySelector('.guess-button');
const $chancesLeft = document.getElementById('chances-left');
const $begin = document.getElementById('begin');
const $end = document.getElementById('end');
const $feedback = document.getElementById('feedback');
const $modalOverlay = document.querySelector('.modal-overlay');
const $history = document.getElementById('history-list');
const $restart = document.getElementById('restart-button');
const $finishTitle = document.getElementById('finish-title');
const $finishText = document.getElementById('finish-text');

// 초기화 함수
const dom = {
    end: 100,
    begin: 1,
}

function reset() {
    $end.textContent = 100;
    $begin.textContent = 1;
    chances = 10;
}

// const dom = [...$guessInput, $guessBtn, $chancesLeft, $begin, $end,
//     $feedback, $modalOverlay, $history, $restart, $finishTitle, $finishText]

// 함수
function randomNum() {
    return Math.floor(Math.random() * 100 + 1);
}

let chances = 10;
let result = randomNum();


$guessBtn.addEventListener('click', e => {
    e.preventDefault();
    const guess = Number($guessInput.value);
    console.log(`${result}`)




    // 로그
    const logItem = document.createElement('li');


    // 입력 유효성 검사
    if (!guess || guess < Number(1) || guess > Number(100)
        || guess > $end.textContent
        || guess < $begin.textContent ) {
        alert('범위 안의 숫자를 입력하세요!');
        return;
    }

    chances--;
    $chancesLeft.textContent = `${chances}`;

    if (guess === result) {
        $modalOverlay.classList.add('show');
        $finishText.textContent = `정답은 ${result}이였습니다!`;
    }
    else if (guess < result) {
        $begin.textContent = guess + 1;
        $feedback.textContent = 'up'

    } else if (guess > result) {
        $end.textContent = guess - 1;
        $feedback.textContent = 'down'
    } else if (chances === 0 && guess !== result) {
        $modalOverlay.classList.add('show');
        $finishTitle.textContent = `GAME OVER`
        $finishText.textContent = `정답은 ${result}이였습니다!`;
    } else if ($begin.textContent  === $end.textContent
                || $begin.textContent + 1  === $end.textContent ) {
        $modalOverlay.classList.add('show');
        $finishText.textContent = `정답은 ${result}이였습니다!`;
    } else {
        alert('범위 안의 숫자를 입력하세요!');
        return;
    }
    const newLi = document.createElement('li');
    newLi.classList.add('history-item', guess > result ? 'up' : 'down' )
    newLi.textContent = `${guess} ${$feedback.textContent}`
    $history.prepend(newLi);
    $guessInput.value = '';
});


$restart.addEventListener('click', e => {
    $modalOverlay.classList.remove('show');
    reset();

})