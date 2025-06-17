
// 변수 정의
const $guessInput = document.getElementById('guess-input');
const $guessBtn = document.querySelector('.guess-button');
const $chancesLeft = document.getElementById('chances-left');
const $begin = document.getElementById('begin');
const $end = document.getElementById('end');
const $feedback = document.getElementById('feedback');
const $modalOverlay = document.querySelector('.modal-overlay');


let answer = randomNum();
let chances = 5;

// 함수
function randomNum() {
    return Math.floor(Math.random() * 100 + 1);
}

$guessBtn.addEventListener('click', () => {
    const guess = Number($guessInput.value);

    // 입력 유효성 검사
    if (!guess || guess < Number($begin.value) || guess > Number($end.value)) {
        alert('범위 안의 숫자를 입력하세요!');
        return;
    }

    chances--;
    $chancesLeft.style.textContent = `남은 기회: ${chances}`;

    if (guess === answer) {
        $modalOverlay.classList.remove('hidden');
    } else if (guess < answer) {
        $begin.style.textContent = guess + 1;
        $feedback.style.textContent = 'up'
    } else if (guess > answer) {
        $end.style.letextContent = guess - 1;

    }

    if (chances === 0 && guess !== answer) {
        alert(`실패! 정답은 ${answer}였습니다.`);
        $guessBtn.disabled = true;
    }

    // $guessInput.value = '';
});

