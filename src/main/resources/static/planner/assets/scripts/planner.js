const itemList = document.querySelector('.item-list');
const itemSelectBox = document.querySelector('.itemSelectBox');

itemList.addEventListener('click', (e) => {
    const target = e.target;

    if (target.closest('.subExercise')) {
        addExerciseCard(target.textContent.trim());
    }

    if (
        target.parentElement.classList.contains('exerciseKind') &&
        !target.querySelector('.subExercise')
    ) {
        addExerciseCard(target.textContent.trim());
    }
});

const emptyMessage = document.querySelector('.emptyMessage');

function updateEmptyMessage() {
    const hasCard = itemSelectBox.querySelector('.exerciseCard');
    emptyMessage.style.display = hasCard ? 'none' : 'flex';
}


/* 카드 삭제 */
itemSelectBox.addEventListener('click', (e) => {
    if (e.target.classList.contains('removeBtn')) {
        e.target.closest('.exerciseCard').remove();
        updateEmptyMessage();
    }
});

function addExerciseCard(name) {
    // 중복 방지
    const exists = [...itemSelectBox.querySelectorAll('.exerciseName')]
        .some(el => el.textContent === name);
    if (exists) return;

    const card = document.createElement('div');
    card.className = 'exerciseCard';

    card.innerHTML = `
        <div class="cardHeader">
            <span class="exerciseName">${name}</span>
            <button class="removeBtn">✕</button>
        </div>

        <div class="cardBody">
            <label>
                세트
                <input type="number" class="setInput" min="1" value="3">
            </label>
            <label>
                횟수
                <input type="number" class="repInput" min="1" value="10">
            </label>
        </div>
    `;

    itemSelectBox.appendChild(card);

    showExercisePreview(name)
    updateEmptyMessage();
}

// 취소 → main.html 이동
const cancelBtn = document.getElementById('cancelBtn');
cancelBtn.addEventListener('click', () => {
    window.location.href = '../mainPage/mainPage.html';
});

const saveBtn = document.getElementById('saveBtn');

saveBtn.addEventListener('click', () => {
    const cards = itemSelectBox.querySelectorAll('.exerciseCard');

    if (cards.length === 0) {
        alert('운동종목을 선택해주세요!');
        return;
    }

    // 선택된 운동 데이터 수집 (디버깅용)
    const data = Array.from(cards).map(card => ({
        name: card.querySelector('.exerciseName').textContent,
        sets: parseInt(card.querySelector('input[type="number"].setInput')?.value || card.querySelector('.cardBody input:nth-child(1)').value),
        reps: parseInt(card.querySelector('input[type="number"].repInput')?.value || card.querySelector('.cardBody input:nth-child(2)').value)
    }));

    console.log('저장할 데이터:', data); // 개발자용 확인

    alert('운동 계획이 저장되었습니다!');  // DB 대신 alert

    // 저장 후 main.html로 이동
    window.location.href = '../mainPage/mainPage.html';
});
