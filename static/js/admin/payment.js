// 사이드바 이벤트
const menuBtns = document.querySelectorAll(".menu-btn");
const allSubMenus = document.querySelectorAll(".menu-sub-list");
console.log(menuBtns);

menuBtns.forEach((btn) => {
    console.log(btn);

    btn.addEventListener("click", function (e) {
        console.log(e.target);

        // 모든 서브메뉴 닫기
        allSubMenus.forEach((submenu) => {
            submenu.style.display = "none";
        });

        // active 제거
        menuBtns.forEach((b) => b.classList.remove("active"));

        // active 추가 (화살표 회전용)
        this.classList.add("active");

        // aria-controls에서 서브메뉴 열기
        const targetId = this.getAttribute("aria-controls");
        if (targetId) {
            const targetMenu = document.getElementById(targetId);
            if (targetMenu) targetMenu.style.display = "block";
        }
    });
});

// 결제상태 선택 클릭시 결제 리스트 열기
const paySelectBtn = document.getElementById("btn-filter-status");
const paySelect = document.querySelector(".bt-pop-menu-context");

paySelectBtn.addEventListener("click", (e) => {
    if (paySelect.classList[1]) {
        paySelect.classList.remove("show");
    } else {
        paySelect.classList.add("show");
    }
});

// 결제상태선택 클릭 이벤트
const selectAllBtn = document.getElementById("btn-select-all");
const deselectAllBtn = document.getElementById("btn-deselect-all");
const checkBoxes = document.querySelectorAll(".boot-check-box");

// 전체 선택 클릭 시 이벤트
selectAllBtn.addEventListener("click", (e) => {
    checkBoxes.forEach((box) => {
        const checkIcon = box.querySelector("i.mdi-check");
        selectAllBtn.classList.add("active");
        if (checkIcon) {
            checkIcon.style.display = "inline-block";

            box.classList.add("active");
        }
    });
});

// 전체 취소 클릭 시 이벤트

deselectAllBtn.addEventListener("click", (e) => {
    checkBoxes.forEach((box) => {
        const checkIcon = box.querySelector("i.mdi-check");
        if (checkIcon) {
            checkIcon.style.display = "none";

            box.classList.remove("active");
        }
    });
});
// 모든 개별 체크박스 클릭 이벤트
document.querySelectorAll(".boot-check-box").forEach((box) => {
    box.addEventListener("click", () => {
        const icon = box.querySelector("i.mdi-check");
        const isChecked = icon.style.display === "inline-block";
        icon.style.display = isChecked ? "none" : "inline-block";
        box.classList.toggle("active", !isChecked);
    });
});

//  결제 상태 선택 상세 전체 선택
const checkAll = document.querySelectorAll(".all-check-btn");
const payList = document.getElementById("collapse_payloading");
const payFail = document.getElementById("collapse_payFail");
const payComplete = document.getElementById("collapse_cancel");
const pays = ["collapse_payloading", "collapse_payFail", "collapse_cancel"];
for (let index = 0; index < 3; index++) {
    checkAll[index].addEventListener("click", (e) => {
        const iTags = document.querySelectorAll(
            `#${pays[index]} ul li div div label i`
        );
        iTags.forEach((iTag) => {
            iTag.style.display =
                iTag.style.display === "none" ? "inline-block" : "none";
        });
    });
}

// 결제 상세 선택 상세 +버튼 리스트
const payBtnIcons = document.querySelectorAll(".mdi.mdi-plus");
console.log(payComplete);

// 결제 상세 선택 - 결제 진행중
payBtnIcons[0].addEventListener("click", (e) => {
    if (payList.classList[1]) {
        payList.classList.remove("show");
    } else {
        payList.classList.add("show");
    }
});

// 결제 상세 선택 - 결제 실패
payBtnIcons[1].addEventListener("click", (e) => {
    if (payFail.classList[1]) {
        payFail.classList.remove("show");
    } else {
        payFail.classList.add("show");
    }
});

// 결제 상세 선택 - 결제 취소
payBtnIcons[2].addEventListener("click", (e) => {
    if (payComplete.classList[1]) {
        payComplete.classList.remove("show");
    } else {
        payComplete.classList.add("show");
    }
});

// 검색창 돋보기 버튼 클릭
// const input = document.querySelector("type=[text]");
// const button = document.querySelector(".form-control.flex-grow-1");

// button.addEventListener("click", (e) => {
//     const value = input.value;
//     console.log(value);
// });
