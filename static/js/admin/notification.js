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

// const homeButton = document.getElementById("menu-home");
// const sideMenuButtons = document.querySelectorAll(".menu-btn");
// const sideSubLists = document.querySelectorAll(".menu-sub-list");
// const sideSubLinks = document.querySelectorAll(".bootpay-link");
// const tabNames = document.querySelectorAll(".tab-name");
// const icons = document.querySelectorAll(".icon-wrapper i");

// sideSubLinks.forEach((sideSubLink) => {
//     sideSubLink.addEventListener("click", (e) => {
//         e.preventDefault();

//         // 모든 서브 링크 active 초기화
//         sideSubLinks.forEach((resetSubLink) => {
//             resetSubLink.classList.remove("active");
//         });
//         sideSubLink.classList.add("active");

//         // 상위 메뉴 버튼 current 초기화 + 설정
//         sideMenuButtons.forEach((resetMenuButton) => {
//             resetMenuButton.classList.remove("current");
//         });

//         const parentSubList = sideSubLink.parentElement.parentElement;
//         const parentButton = document.querySelector(
//             `.menu-btn[aria-controls = "${parentSubList.id}"]`
//         );
//         parentButton.classList.add("current");

//         // 다른 리스트 닫기
//         sideSubLists.forEach((sideSubList) => {
//             if (sideSubList !== parentSubList) {
//                 sideSubList.classList.remove("show");

//                 const nonTargetButton = document.querySelector(
//                     `.menu-btn[aria-controls="${sideSubList.id}"]`
//                 );
//                 if (nonTargetButton) {
//                     const nonTargetIcon =
//                         nonTargetButton.querySelector(".icon-wrapper i");
//                     nonTargetIcon.classList.remove("mdi-chevron-down");
//                     nonTargetIcon.classList.add("mdi-chevron-right");
//                 }
//             }
//         });
//     });
// });

// 상단 오른쪽 관리자 이메일 클릭 시 리스트 출력
// 출력된 리스트 다시 닫기
const userMenuWrapper = document.querySelector(".user-menu-wrapper");
const userMenuContent = document.querySelector(".user-menu-content");

userMenuWrapper.addEventListener("click", (e) => {
    e.preventDefault();
    if (userMenuContent.classList.contains("show")) {
        userMenuContent.classList.remove("show");
    } else {
        userMenuContent.classList.add("show");
    }
});

document.addEventListener("click", (e) => {
    e.preventDefault();
    if (
        // userMenuContent 안넣어주면 안에 걸 눌러도 리스트가 닫힌다.
        !userMenuWrapper.contains(e.target) &&
        !userMenuContent.contains(e.target)
    ) {
        userMenuContent.classList.remove("show");
    }
});

// 페이지 번호 클릭 이벤트(데이터를 받아와야 하는 곳이라 주석 처리)
// const pageNums = document.querySelectorAll(".page-num");
// const pageItemNums = document.querySelectorAll(".page-item-num");

// pageItemNums.forEach((pageItemNum) => {
//     pageItemNum.addEventListener("click", (e) => {
//         e.preventDefault();

//         pageNums.forEach((pageNum) => {
//             pageNum.classList.remove("active");
//         });

//         pageItemNum.parentElement.classList.add("active");
//     });
// });

// 공지사항 클릭이벤트

const pageMoves = document.querySelectorAll(".notice-title");

pageMoves.forEach((title) => {
    title.addEventListener("click", (e) => {
        const tr = title.closest("tr");
    });
});
