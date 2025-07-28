const menuBtns = document.querySelectorAll(".menu-btn");
const allSubMenus = document.querySelectorAll(".menu-sub-list");

menuBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();

        // 모든 서브메뉴 닫기
        allSubMenus.forEach((submenu) => {
            submenu.style.display = "none";
        });

        // active 제거
        menuBtns.forEach((b) => b.classList.remove("active"));

        // active 추가 (화살표 회전용)
        this.classList.add("active");

        // aria-controls에서 서브메뉴 id 가져와서 열기
        const targetId = this.getAttribute("aria-controls");
        if (targetId) {
            const targetMenu = document.getElementById(targetId);
            if (targetMenu) targetMenu.style.display = "block";
        }
    });
});

const paySelect = document.getElementById("btn-filter-status");

paySelect.addEventListener("click", (e) => {
    if (e.target.closest("#btn-filter-status")) {
        const box = document.getElementById("popMenu");
        box.style.display = box.style.display === "none" ? "block" : "none";
    }
});
