// 전화번호 앞자리 선택 클릭 부분 //
const select = document.getElementById("phone-numer-content");
const options = document.querySelectorAll(".option");
let tempText = null;
select.addEventListener("click", (e) => {
    options.forEach((option) => {
        if (option.classList[2]) {
            option.classList.remove("show");
            select.style.border = "1px solid #f2f4f6";
        } else {
            option.classList.add("show");
            select.style.border = "1px solid #333d4b";
        }
    });
});
console.log(options);
options.forEach((option) => {
    console.log(123);
    option.addEventListener("click", (e) => {
        // console.log(123);
        temp = select.firstElementChild.textContent;
        select.firstElementChild.textContent = option.textContent;
        option.textContent = temp;
    });
});
// 전화번호 앞자리 선택 클릭 부분 //

// 인풋에다가 포커스 블러 처리 해주기 //
const inputTags = document.querySelectorAll("input[type=text]");

inputTags.forEach((inputTag) => {
    inputTag.addEventListener("focus", (e) => {
        inputTag.style.border = "1px solid #333d4b";
    });

    inputTag.addEventListener("blur", (e) => {
        inputTag.style.border = "1px solid #f2f4f6";
    });
});
// 인풋에다가 포커스 블러 처리 해주기 //

const painLevel = document.querySelector("input[type=text].pain-level");
painLevel.addEventListener("keyup", (e) => {
    if (painLevel.value > 5) {
        painLevel.value = 5;
        return;
    }
    if (painLevel.value === "0") {
        console.log(123);
        painLevel.value = 1;
        return;
    }
});
