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
        if (checkIcon) {
            checkIcon.style.display = "inline-block";
        }
    });
});

// 전체 취소 클릭 시 이벤트
deselectAllBtn.addEventListener("click", (e) => {
    checkBoxes.forEach((box) => {
        const checkIcon = box.querySelector("i.mdi-check");
        if (checkIcon) {
            checkIcon.style.display = "none";
        }
    });
});

checkBoxes.forEach((box) => {
    box.addEventListener("click", (e) => {
        const checkIcon = box.querySelector("i.mdi-check");
        if (checkIcon) {
            checkIcon.style.display =
                checkIcon.style.display === "none" ||
                checkIcon.style.display === ""
                    ? "inline-block"
                    : "none";
        }
    });
});
