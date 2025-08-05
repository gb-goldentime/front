// 사이드바 메뉴 토글
const menuBtns = document.querySelectorAll(".menu-btn");
const allSubMenus = document.querySelectorAll(".menu-sub-list");

menuBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
        allSubMenus.forEach((submenu) => (submenu.style.display = "none"));
        menuBtns.forEach((b) => b.classList.remove("active"));

        this.classList.add("active");

        const targetId = this.getAttribute("aria-controls");
        const targetMenu = document.getElementById(targetId);
        if (targetMenu) targetMenu.style.display = "block";
    });
});
