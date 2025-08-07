const menubtn1 = document.getElementById("menubtn1");
const sublist1 = document.getElementById("sublist1");
const menubtn2 = document.getElementById("menubtn2");
const sublist2 = document.getElementById("sublist2");
const menubtn3 = document.getElementById("menubtn3");
const sublist3 = document.getElementById("sublist3");
const menubtn4 = document.getElementById("menubtn4");
const sublist4 = document.getElementById("sublist4");
const submenus = document.querySelectorAll(".boot-link");
const btnfilterstatus = document.getElementById("btn-filter-status");
const allchecked1 = document.getElementById("allchecked1");
const allflasechecked1 = document.getElementById("allflasechecked1");
const allchecked2 = document.getElementById("allchecked2");
const allflasechecked2 = document.getElementById("allflasechecked2");
const checkboxactive1 = document.getElementById("checkboxactive1");
const checkboxactive2 = document.getElementById("checkboxactive2");
const bootpopbtn1 = document.getElementById("btn-filter-pm");
const popmenubt1 = document.getElementById("pop-menu-bt1");
const popmenubt2 = document.getElementById("pop-menu-bt2");
const modalclose = document.getElementById("close");
const body = document.getElementById("body");
const modalopen = document.getElementById("modal-open");
const usermenubtn = document.getElementById("usermenubtn");
const usermenu = document.getElementById("usermenu");

// 메뉴 버튼 이벤트
if (menubtn1) {
    menubtn1.addEventListener("click", (e) => {
        sublist1?.classList.toggle("show");
        e.preventDefault();
    });
}
if (menubtn2) {
    menubtn2.addEventListener("click", (e) => {
        sublist2?.classList.toggle("show");
        e.preventDefault();
    });
}
if (menubtn3) {
    menubtn3.addEventListener("click", (e) => {
        sublist3?.classList.toggle("show");
        e.preventDefault();
    });
}
if (menubtn4) {
    menubtn4.addEventListener("click", (e) => {
        sublist4?.classList.toggle("show");
        e.preventDefault();
    });
}

// 유저 메뉴 버튼
if (usermenubtn && usermenu) {
    usermenubtn.addEventListener("click", (e) => {
        usermenu.classList.toggle("show");
    });
}

// 서브메뉴 active 토글
submenus.forEach((submenu) => {
    submenu.addEventListener("click", (e) => {
        e.preventDefault();
        submenus.forEach((active) => active.classList.remove("active"));
        submenu.classList.add("active");
    });
});

// 일반회원 상세 모달 창 열고 닫는 이벤트
const modal = document.querySelector(".member-modal");
const actionButtons = document.querySelectorAll(".action-btn");
const closeButtons = document.querySelectorAll(".close");
const closeFooterButton = document.querySelector(".btn-close");

actionButtons.forEach((actionButton) => {
    actionButton.addEventListener("click", (e) => {
        console.log(222);
        modal.style.display = "block";
        setTimeout(() => {
            modal.classList.add("show");
            modal.style.background = "rgba(0,0,0,0.5)";
            document.body.classList.add("modal-open");
        }, 100);
    });
});

closeButtons.forEach((closeButton) => {
    closeButton.addEventListener("click", (e) => {
        modal.classList.remove("show");
        document.body.classList.remove("modal-open");

        setTimeout(() => {
            modal.style.display = "none";
        }, 100);
    });
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("show");
        document.body.classList.remove("modal-open");

        setTimeout(() => {
            modal.style.display = "none";
        }, 100);
    }
});

closeFooterButton.addEventListener("click", (e) => {
    modal.classList.remove("show");
    document.body.classList.remove("modal-open");

    setTimeout(() => {
        modal.style.display = "none";
    }, 100);
});

// 승인 여부
const acceptBtn = document.querySelectorAll(".accept");
const refuseBtn = document.querySelectorAll(".refuse");

// 승인 버튼
acceptBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const tr = e.currentTarget.closest("tr");
        const status = tr.querySelector(".approval-status");
        status.textContent = "승인 완료";
        status.style.color = "green";
    });
});

// 거절 버튼
refuseBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(222);
        const tr = e.currentTarget.closest("tr");
        const status = tr.querySelector(".approval-status");
        status.textContent = "승인 거절";
        status.style.color = "red";
    });
});

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
