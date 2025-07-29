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

결제상태선택 클릭 이벤트
const payStBtn = document.getElementById("pay-status-btn");
const allAndCancel = document.getElementById("status-btn");

payStBtn.addEventListener("click", (e) => {
    if(e.target.allAndCancel){
        allAndCancel.style =
    }
});
