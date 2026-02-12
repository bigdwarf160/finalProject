const preview = document.querySelector('.exercisePreview');
const titleEl = preview.querySelector('.exerciseTitle');
const descEl = preview.querySelector('.exerciseDesc');
const videoEl = preview.querySelector('.exerciseVideo');

// 운동 데이터
const exerciseInfo = {
    '벤치프레스': {
        desc: '가슴 근육을 키우는 대표적인 웨이트 운동입니다.',
        video: '/planner/assets/videos/benchPress.mp4'
    },
    '인클라인 벤치프레스': {
        desc: '가슴 가운데 부분을 키우는 웨이트 운동입니다. 벤치프레스랑 똑같지만 의자만 좀 세워서 미는 운동입니다..',
        video: '/planner/assets/videos/inclineBenchPress.mp4'
    },
    '디클라인 벤치프레스': {
        desc: '가슴 하부를 키우는 웨이트 운동입니다. 벤치프레스랑 똑같지만 머리가 가장 아래로 가게 해서 미는 운동입니다.',
        video: '/planner/assets/videos/declineBenchPress.mp4'
    },
    '랫풀다운': {
        desc: '광배근을 키우는 웨이트 운동입니다.',
        video: '/planner/assets/videos/latPullDown.mp4'
    },
    '풀업': {
        desc: '흔히 턱걸이라고 부르며, 광배근 전체와 등을 키우는 운동입니다.',
        video: '/planner/assets/videos/pullUp.mp4'
    },
    '씨티드로우': {
        desc: '등 하부를 키우는 웨이트 운동입니다. 등 전체의 두께감을 키우는데 매우 효과적입니다.',
        video: '/planner/assets/videos/seatedRow.mp4'
    },
    '바벨로우': {
        desc: '벤트오버(상체 숙임) 자세에서 바벨을 배꼽 쪽으로 당겨 광배근, 능형근, 승모근 등 상체 뒷부분을 강화하는 대표적인 복합 관절 등 운동입니다.',
        video: '/planner/assets/videos/barbellRow.mp4'
    },
    '스쿼트': {
        desc: '어깨너비로 서서 허리를 편 채 엉덩이를 뒤로 빼며 허벅지가 지면과 수평이 될 때까지 앉았다 일어나는 동작입니다.',
        video: '/planner/assets/videos/squat.mp4'
    },
    '레그프레스': {
        desc: '레그 프레스란 머신을 이용하여 사선 방향으로 고중량의 무게를 밀어내는 하체 운동입니다.',
        video: '/planner/assets/videos/legPress.mp4'
    },
    '숄더프레스': {
        desc: '어깨의 3면 중 특히 전면 삼각근(Frontal Deltoid)과 측면 삼각근(Lateral Deltoid)을 주 타깃으로 하여 어깨의 부피와 전체적인 볼륨을 키우는 다관절 운동입니다.',
        video: '/planner/assets/videos/shoulderPress.mp4'
    },
    '런지': {
        desc: '허벅지 앞쪽(대퇴사두근)과 엉덩이(대둔근, 중둔근)를 집중적으로 강화하는 대표적인 하체 운동입니다.',
        video: '/planner/assets/videos/lunge.mp4'
    },
    '사이드 레터럴 레이즈': {
        desc: '측면 어깨를 타겟으로 하는 운동입니다.',
        video: '/planner/assets/videos/sideLateralRaise.mp4'
    },
    '리어 델트 레이즈': {
        desc: ' 덤벨 후방 삼각근 올리기는 주로 후방 삼각근을 대상으로 하는 근력 운동으로, 자세 개선, 어깨 안정성 강화, 균형 잡힌 근육 발달을 촉진하는 데 도움이되는 운동입니다.',
        video: '/planner/assets/videos/rearDeltRaise.mp4'
    },
    '리버스펙덱': {
        desc: '리버스 펙 덱은 어깨 후면 삼각근을 키우는 운동으로 어깨 뒤쪽 후면 근육을 강화하는 운동입니다.',
        video: '/planner/assets/videos/reversePecDeck.mp4'
    },
    '클로즈 그립 벤치프레스': {
        desc: '좁은 그립(어깨너비 이내)을 사용하여 상완삼두근(특히 외측두)을 주동근으로 강하게 자극하며, 부차적으로 가슴 안쪽(내측 흉근)과 전면 삼각근을 단련하는 복합 관절 운동입니다.',
        video: '/planner/assets/videos/closeGripBenchPress.mp4'
    },
    '딥스': {
        desc: '큰가슴근, 삼두근, 전면 어깨세모근이 주로 발달되는 운동입니다.',
        video: '/planner/assets/videos/dips.mp4'
    },
    '바벨컬': {
        desc: '주동근인 상완이두근(알통) 전체를 발달시키는 대표적인 운동으로, 특히 이두근의 내측(단두) 발달에 효과적인 운동입니다.',
        video: '/planner/assets/videos/barbellCrul.mp4'
    },
    '덤벨 컬': {
        desc: '팔뚝의 상완이두근(알통 근육)이며, 보조적으로 삼각근 전면과 전완근(손목과 연결된 아래 팔 근육)이 사용이되는 운동입니다.',
        video: '/planner/assets/videos/dumbbellCurl.mp4'
    },
    '이지바 컬': {
        desc: '상완이두근(특히 바깥쪽 장두)을 주 타겟으로 하며, 상완근과 전완근(상완요골근)까지 함께 단련하는 운동입니다.',
        video: '/planner/assets/videos/EZ-barCurl.mp4'
    },
    '버피': {
        desc: '전신을 사용하는 고강도 복합 운동으로, 특히 가슴, 어깨, 삼두근(팔), 코어(복근), 허벅지, 엉덩이 근육을 동시에 강화하며 심폐 지구력을 향상시킵니다.',
        video: '/planner/assets/videos/burpees.mp4'
    },
    '마운틴 클라이머': {
        desc: '전신 유산소 운동으로 무릎을 가슴까지 끌어올리며 계속 달려주는 동작입니다. 코어와 복근 자극부터 효과적인 칼로리 소모까지 너무 완벽한 운동입니다.',
        video: '/planner/assets/videos/mountainClimbers.mp4'
    },
    '점핑잭': {
        desc: '점핑잭(팔벌려뛰기)은 전신을 사용하는 유산소 및 근력 운동으로, 특히 하체(허벅지, 엉덩이), 복부 코어, 가슴, 어깨 부위를 집중적으로 자극하여 체지방 연소와 근력 향상에 효과적인 운동입니다.',
        video: '/planner/assets/videos/jumpingJacks.mp4'
    },
    '스탠다드 푸시업': {
        desc: '가슴(대흉근), 삼두근, 전면 어깨(어깨세모근)를 주동근으로 하는 상체 복합 운동입니다. 코어, 앞톱니근, 엉덩이 등 전신 근육이 협응하며, 올바른 자세로 수행 시 상체 근력 및 기초 체력 강화에 효과적인 운동입니다.',
        video: '/planner/assets/videos/standardPushUp.mp4'
    },
    '와이드 푸시업': {
        desc: '손을 어깨너비보다 1.5~2배 넓게 벌려 수행하는 맨몸 운동으로, 대흉근(가슴 근육) 바깥쪽과 전면 삼각근(어깨 앞쪽)에 강한 자극을 줍니다. 가슴 전체의 폭을 넓히고 외곽 라인을 다듬는 데 효과적인 운동입니다.',
        video: '/planner/assets/videos/widePushUp.mp4'
    },
    '다이아몬드 푸시업': {
        desc: '양손을 모아 삼각형(다이아몬드) 형태로 만들고 수행하여, 일반 푸시업보다 삼두근(팔 뒷부분)과 가슴 안쪽 근육을 집중적으로 자극하는 고강도 맨몸 운동입니다.',
        video: '/planner/assets/videos/diamondPushUp.mp4'
    },
    '바디웨이트 스쿼트': {
        desc: '하체 전반을 단련하는 핵심 운동으로, 특히 대퇴사두근(허벅지 앞쪽), 대둔근(엉덩이), 햄스트링(허벅지 뒤쪽)에 강한 자극을 주는 운동입니다.',
        video: '/planner/assets/videos/bodyWeightSquat.mp4'
    },
    '스텝업': {
        desc: '하체 근육인 대퇴사두근(허벅지 앞쪽), 둔근(엉덩이), 햄스트링(허벅지 뒤쪽), 종아리를 주동근으로 하여 집중 강화하는 운동입니다.',
        video: '/planner/assets/videos/stepUps.mp4'
    },
    '점핑 스쿼트': {
        desc: '하체 근력과 심폐 지구력을 동시에 강화하는 고강도 운동으로, 대퇴사두근(허벅지 앞), 둔근(엉덩이), 햄스트링(허벅지 뒤), 그리고 종아리 근육에 강력한 자극을 주는 운동입니다.',
        video: '/planner/assets/videos/jumpSquat.mp4'
    },
    '월싯': {
        desc: '벽에 등을 기대고 앉아 허벅지가 지면과 평행이 되도록 버티는 등척성 운동으로, 대퇴사두근(허벅지 앞쪽)에 강력한 자극을 주는 운동입니다.',
        video: '/planner/assets/videos/wallSit.mp4'
    },
    '플랭크': {
        desc: '복횡근, 복직근 등 코어 근육 전체를 중심으로 등, 엉덩이, 어깨, 팔까지 전신을 단단하게 강화하는 대표적인 맨몸 운동입니다.',
        video: '/planner/assets/videos/plank.mp4'
    },
    '사이드 플랭크': {
        desc: '옆구리 라인을 집중적으로 단련하는 대표적인 코어 운동으로, 외복사근(옆구리)과 내복사근, 척추기립근, 둔근(엉덩이)을 강화하여 요통 완화와 균형 감각 향상에 탁월한 운동입니다.',
        video: '/planner/assets/videos/sidePlank.mp4'
    },
    '크런치': {
        desc: '복직근 중 상복부(윗배)를 집중적으로 강화하는 운동입니다.',
        video: '/planner/assets/videos/crunches.mp4'
    },
    '레그레이즈': {
        desc: '주로 하복부(아랫배) 근육을 집중적으로 강화하는 운동입니다. 복직근 하부, 골반 굴근, 코어 근육 전반에 자극을 주며, 특히 행잉(매달려서) 방식은 상복부까지 포함한 전체적인 복근 발달에 효과적인 운동입니다.',
        video: '/planner/assets/videos/legRaise.mp4'
    }
    // 필요하면 더 추가
};

// 카드 클릭 또는 선택 시 호출
function showExercisePreview(name) {
    const info = exerciseInfo[name];
    if (!info) return;

    titleEl.textContent = name;
    descEl.textContent = info.desc;
    videoEl.src = info.video;

    preview.classList.remove('hidden');
}

itemSelectBox.addEventListener('click', (e) => {
    const card = e.target.closest('.exerciseCard');
    if (!card) return;

    document
        .querySelectorAll('.exerciseCard')
        .forEach(c => c.classList.remove('active'));

    card.classList.add('active');

    const name = card.querySelector('.exerciseName').textContent;
    showExercisePreview(name);
});
