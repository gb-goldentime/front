let modalCheck;
let buttonsCheck = true;
const buttons = document.querySelectorAll("button.interest-btn");
const mailButtons = document.querySelectorAll("button.interest-btn");
const doctorSearchInput = document.querySelector(".doctor-input-content");
const mailModalInput = document.querySelectorAll("input[type=text].mail-input");
const slide = document.querySelector(".search-layout");
const doctorRemoveBtn = document.querySelector(
    "div.mail-doctor-search-wrap button"
);
const inputFileBtn = document.getElementById("create-question-image");
const fileCancel = document.getElementById("file-cancel-btn");
const cancelBtn = document.getElementsByClassName("cancel-btn")[0];
let check = false;
console.log(cancelBtn);
const doctorAddBtns = document.querySelectorAll(
    "ul.mail-search-doctor-name-list li  a.link-click"
);
console.log(doctorAddBtns);
const showMailModal = () => {
    modalCheck = false;
    document.querySelector("div.warn-modal").style.animation = "popUp 0.5s";
    document.querySelector("div.modal").style.display = "flex";
    setTimeout(() => {
        modalCheck = true;
    }, 500);
};

const showWarnModal = (modalMessage) => {
    modalCheck = false;
    document.getElementById("content-wrap").innerHTML = modalMessage;
    document.querySelector("div.warn-modal").style.animation = "popUp 0.5s";
    document.querySelector("div.modal").style.display = "flex";
    setTimeout(() => {
        modalCheck = true;
    }, 500);
};

document.querySelector("div.modal").addEventListener("click", (e) => {
    if (modalCheck) {
        document.querySelector("div.warn-modal").style.animation =
            "popDown 0.5s";
        setTimeout(() => {
            document.querySelector("div.modal").style.display = "none";
        }, 450);
    }
});

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log(111);
        let message = ``;
        if (!buttonsCheck) {
            return;
        }
        buttonsCheck = false;

        if (e.target.classList[2] === "active") {
            message = `나의 관심 의사에서 취소했습니다.`;
            showWarnModal(message);
        } else {
            message = `해당 의사를 나의 관심 의사로 <br>등록 했습니다.`;
            showWarnModal(message);
        }

        setTimeout(() => {
            buttonsCheck = true;
        }, 2000);
    });
});

mailButtons.forEach((button) => {
    button.addEventListener("click", (e) => {});
});

doctorSearchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter" && !check) {
        // let slied = document.querySelector(".search-layout");
        // 나중에 길이 받아온 배열의 크기 곱하기 53을 하면 된다 현재는 임시로 100px
        slide.style.height = "118px";
        slide.style.opacity = "100%";
        check = false;
        return;
    } else if (e.key === "A") {
        // 예시 사용하는 부분 나중에 지우기
        e.target.style.borderColor = "red";
    }
});

mailModalInput.forEach((mailInput) => {
    mailInput.addEventListener("focus", (e) => {
        if (e.target.style.borderColor !== "red") {
            e.target.style.borderColor = "black";
            return;
        }
    });
    mailInput.addEventListener("blur", (e) => {
        if (e.target.style.borderColor !== "red") {
            e.target.removeAttribute("style");
            slide.style.height = "0";
            slide.style.opacity = "0";
            return;
        }
    });
});

mailModalInput[0].addEventListener("keyup", (e) => {
    if (e.target.value === "A") {
        e.target.style.borderColor = "red";
    } else {
        e.target.style.borderColor = "black";
    }
});

// doctorAddBtns.forEach((doctorAddbtn) => {
//     console.log(doctorAddbtn);
//     doctorAddbtn.addEventListener("click", (e) => {
//         console.log(1111);
//         // e.stopPropagation();
//         doctorSearchInput.value = "의사이름";
//         doctorSearchInput.disabled = true;
//         doctorRemoveBtn.style.display = "block";
//         slide.style.height = "0px";
//         slide.style.opacity = "100%";
//         slide.style.overflow = "hidden";
//     });
// });

doctorAddBtns.forEach((doctorAddbtn) => {
    doctorAddbtn.addEventListener("click", (e) => {
        // 의사 이름 셋팅 및 상태 처리
        doctorSearchInput.value = "의사이름";
        doctorSearchInput.disabled = true;
        setTimeout(() => {
            doctorRemoveBtn.style.display = "block";
        }, 200);

        // 슬라이드 닫기 처리
        const currentHeight = slide.scrollHeight; // 현재 실제 높이
        slide.style.height = `${currentHeight}px`;
        // slide.style.overflow = "hidden"; // overflow 숨기기

        // 다음 프레임에서 height 0으로
        requestAnimationFrame(() => {
            slide.style.transition = "height 0.3s ease";
            slide.style.height = "0px";
        });

        // transition이 끝난 뒤 opacity와 기타 속성 변경
        slide.addEventListener(
            "transitionend",
            () => {
                slide.style.opacity = "0"; // 완전 숨김
            },
            { once: true }
        );
    });
});

doctorRemoveBtn.addEventListener("click", (e) => {
    doctorSearchInput.value = "";
    doctorSearchInput.disabled = false;
    doctorRemoveBtn.style.display = "none";
});

document.querySelector("body").addEventListener("click", (e) => {
    console.log(e.target);
});
// const inputFileBtn = document.getElementById("create-question-image");
// const fileCancel

inputFileBtn.addEventListener("change", (e) => {
    const [file] = e.target.files;
    console.log(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    const imgTag = document.createElement("img");
    const divTag = document.getElementsByClassName("thumbnail-wrap")[0];
    const divBtn = document.createElement("div");
    divBtn.id = "file-cancel-btn";
    imgTag.classList.add("thumbnail");

    reader.addEventListener("load", (e) => {
        // console.log(e.target.result);
        const path = e.target.result;
        if (path.includes("image")) {
            imgTag.style.backgroundImage = `url(${path})`;
            divTag.appendChild(imgTag);
            cancelBtn.appendChild(divBtn);
        }
        cancelBtn.style.display = "block";
    });
});

cancelBtn.addEventListener("click", (e) => {
    inputFileBtn.value = "";
    document.getElementsByClassName("thumbnail-wrap")[0].remove();
    cancelBtn.style.display = "none";
});
