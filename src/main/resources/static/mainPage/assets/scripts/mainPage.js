const plannerBtn = document.getElementById('plannerBtn');
plannerBtn.addEventListener('click', () => {
    window.location.href = '../planner/planner.html';
});

const actBtn = document.getElementById('actBtn');
actBtn.addEventListener('click', () => {
    window.location.href = '../act/act.html';
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
    window.location.href = "../addPage/crewAddPage.html";
});