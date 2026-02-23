//운동 자극 글귀 추가
const quotes = [
    {
        text: "오늘의 땀이 내일의 근육이 된다.",
        author: "아놀드 슈워제네거"
    },
    {
        text: "포기하지 않으면 실패도 아니다.",
        author: "마이클 조던"
    },
    {
        text: "시작이 반이다. 지금 당장 움직여라.",
        author: "홍길동"
    }
];

const textEl = document.getElementById("quoteText");
const authorEl = document.getElementById("quoteAuthor");

let index = 0;

function changeQuote() {
    textEl.style.opacity = 0;
    authorEl.style.opacity = 0;

    setTimeout(() => {
        index = (index + 1) % quotes.length;

        textEl.textContent = quotes[index].text;
        authorEl.textContent = `- ${quotes[index].author} -`;

        textEl.style.opacity = 1;
        authorEl.style.opacity = 1;
    }, 500);
}

// 3초마다 변경
setInterval(changeQuote, 3000);

const plannerBtn = document.getElementById('plannerBtn');
plannerBtn.addEventListener('click', () => {
    window.location.href = '/planner';
});

const actBtn = document.getElementById('actBtn');
actBtn.addEventListener('click', () => {
    window.location.href = '/act';
});

const communityList = document.getElementById("communityList");
const posts = JSON.parse(localStorage.getItem("posts")) || [];
communityList.innerHTML = "";

posts.forEach((post, idx) => {
    const item = document.createElement("div"); item.className = "item";
    item.innerHTML = `
        <img src="${post.representative}" alt="image">
        <span class="content">${post.content}</span>
    `;
    item.addEventListener("click", () => {
        window.location.href = `../view/crewView.html?index=${idx}`;
    });
    communityList.prepend(item);
});

// 작성 버튼
document.getElementById("addCommunity")?.addEventListener("click", () => {
    window.location.href = "/add/crewAddPage";
});

document.getElementById("addProduct")?.addEventListener("click", () => {
    window.location.href = "/add/productAddPage";
});