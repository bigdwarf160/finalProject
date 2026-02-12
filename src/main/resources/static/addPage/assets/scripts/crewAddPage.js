const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");
const count = document.getElementById("count");
const titleInput = document.getElementById("titleInput");
const contentInput = document.getElementById("contentInput");
const submitBtn = document.getElementById("submitBtn");

let selectedFiles = [];

// 이미지 선택
imageInput.addEventListener("change", e => {
    const files = Array.from(e.target.files);
    if (selectedFiles.length + files.length > 5) { alert("사진은 최대 5장"); return; }
    files.forEach(file => {
        selectedFiles.push(file);
        const reader = new FileReader();
        reader.onload = () => {
            const div = document.createElement("div"); div.className = "preview-item";
            const img = document.createElement("img"); img.src = reader.result;
            const btn = document.createElement("button"); btn.className = "remove-btn"; btn.innerText = "×";
            btn.addEventListener("click", () => {
                selectedFiles.splice(selectedFiles.indexOf(file), 1);
                div.remove();
                count.innerText = selectedFiles.length;
            });
            div.appendChild(img); div.appendChild(btn); preview.appendChild(div);
        };
        reader.readAsDataURL(file);
    });
    count.innerText = selectedFiles.length;
    imageInput.value = "";
});

// 등록
submitBtn.addEventListener("click", () => {
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();
    if (!title || !content) { alert("제목과 내용을 입력"); return; }
    if (selectedFiles.length === 0) { alert("사진 선택"); return; }

    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const images = [];
    let loaded = 0;

    selectedFiles.forEach((file, idx) => {
        const reader = new FileReader();
        reader.onload = () => {
            images.push(reader.result);
            loaded++;
            if (loaded === selectedFiles.length) {
                posts.push({
                    title, content, images,
                    representative: images[0],
                    createdAt: new Date().toISOString()
                });
                localStorage.setItem("posts", JSON.stringify(posts));
                window.location.href = "../mainPage/mainPage.html";
            }
        };
        reader.readAsDataURL(file);
    });
});