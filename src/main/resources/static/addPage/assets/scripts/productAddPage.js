const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");
const count = document.getElementById("count");
const submitBtn = document.getElementById("submitBtn")

let selectedFiles = [];

imageInput.addEventListener("change", (e) => {
    const files = Array.from(e.target.files);

    if (selectedFiles.length + files.length > 10) {
        alert("사진은 최대 10장까지 첨부할 수 있어요.");
        imageInput.value = "";
        return;
    }

    files.forEach(file => {
        selectedFiles.push(file);

        const reader = new FileReader();
        reader.onload = () => {
            const div = document.createElement("div");
            div.className = "preview-item";

            const img = document.createElement("img");
            img.src = reader.result;

            const btn = document.createElement("button");
            btn.className = "remove-btn";
            btn.innerText = "×";

            btn.onclick = () => {
                const index = selectedFiles.indexOf(file);
                selectedFiles.splice(index, 1);
                div.remove();
                count.innerText = selectedFiles.length;
            };

            div.appendChild(img);
            div.appendChild(btn);
            preview.appendChild(div);
        };
        reader.readAsDataURL(file);
    });

    count.innerText = selectedFiles.length;
    imageInput.value = "";
});

const priceInput = document.getElementById("priceInput");

priceInput.addEventListener("input", () => {
    // 숫자만 남기기
    priceInput.value = priceInput.value.replace(/[^0-9]/g, "");
});

priceInput.addEventListener("input", () => {
    let value = priceInput.value.replace(/[^0-9]/g, "");
    priceInput.value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});

// 등록
submitBtn.addEventListener("click", () => {
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();
    if (!title || !content || !priceInput) { alert("제목과 내용을 입력"); return; }
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
                    title, price, content, images,
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