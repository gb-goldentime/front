HTMLCollection.prototype.forEach = Array.prototype.forEach;

let modalCheck;
//  광클 예방
let buttonsCheck = true;
// 관심 추가 버튼
const buttons = document.querySelectorAll("button.interest-btn");
// 의사 찾기 인풋
const doctorSearchInput = document.querySelector(".doctor-input-content");
// 메일 작성하기위한 인풋 태그들
const mailModalInput = document.querySelectorAll("input[type=text].mail-input");
// 의사 찾기하면 의사들 나올 공간
const slide = document.querySelector(".search-layout");
// 의사 추가하고 나서 다른 의사 선택하기 위해 먼저 x버튼
const doctorRemoveBtn = document.querySelector(
    "div.mail-doctor-search-wrap button"
);
// 의사 추가 버튼
const doctorAddBtns = document.getElementsByClassName(
    "mail-search-doctor-name-list"
)[0];

//관심 추가-삭제 버튼
const interestBtn = document.querySelector(".interest-btn");

//숨겨진 input
const hiddenIuput = document.querySelector(".hidden-input");

const listLayout = document.getElementById("intersectionObserver");

// 이미지 파일 연달아 붙이는 공간
const ulTag = document.getElementById("file-img-list");
// 쪽지 작성 모달 띄우기 버튼
const mailSendBtns = document.getElementsByClassName("mail-send-btn");

// 이미지 파일 버튼
const inputFileBtn = document.getElementById("create-question-image");

// 체크박스 영역
const checkBoxDiv = document.querySelector(".label-check-box");
// 쪽지 작성 모달 영역
const mailSendModal = document.querySelector(".mail-send-modal");

// 포인트차감 동의할 지 버튼
const mailSendCancleBtn = document.querySelector(".mail-send-cancle-btn");
// 체크박스 영역 부분
const label = document.querySelector(".checkbox-label");
// 체크시 이미지 부분
const svg = document.querySelector(".checkbox-svg");
// 쪽지 보내기 버튼
const sendBtn = document.querySelector(".mail-send-btn-check");
// 상세보기 아래 버튼들
const profilBtns = document.querySelectorAll(".profil-content-select");
const profilCotentCheck = document.querySelector(".profil-content-selector");
const elements = document.querySelectorAll("[data-cnt]");

profilBtns.forEach((profilBtn) => {
    profilBtn.addEventListener("click", (e) => {
        // console.log(1);
        const cnt = profilBtn.dataset.cnt;
        console.log(profilCotentCheck);
        profilCotentCheck.style.transform = `translateX(calc(${100 * cnt}% + ${
            16 * cnt
        }px))`;
        document.querySelector("span.active").classList.remove("active");
        const spanTag = profilBtn.firstElementChild.firstElementChild;
        spanTag.classList.add("active");
    });
});

/*************** 모달 부분 ***********/
const textWarnCheck = (tag, check = false) => {
    let count = tag.value.length;
    const temp = check
        ? document.querySelector(".content-text-warn.text-warn")
        : document.querySelector(".mail-title-warn.text-warn");
    temp.setAttribute("data-count", count);
    // console.log(111);
};

let check = false;

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

/********************************************************************************/
// 의사 검색창에서의 동작
doctorSearchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !check) {
        e.preventDefault();
        // 나중에 패치
        // let slied = document.querySelector(".search-layout");
        // 나중에 길이 받아온 배열의 크기 곱하기 53을 하면 된다 현재는 임시로 100px
        slide.style.height = "118px";
        slide.style.opacity = "100%";
        check = false;

        return;
    } else if (e.target.value === "A") {
        // 예시 사용하는 부분 나중에 지우기
        e.target.style.borderColor = "red";
    } else {
        e.target.style.borderColor = "black";
    }
});

// 인풋에서 포커스 유무에 따른 스타일변화
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
            // slide.style.height = "0";
            // slide.style.opacity = "0";
            return;
        }
    });
});

const textarea = document.querySelector("#mailContent");
textarea.addEventListener("keyup", (e) => {
    textWarnCheck(textarea, true);
});

// 임시로 특정 단어 입력 임시입니다.
mailModalInput[0].addEventListener("keyup", (e) => {
    if (e.target.value === "A") {
        e.target.style.borderColor = "red";
    } else {
        e.target.style.borderColor = "black";
    }
    textWarnCheck(mailModalInput[0]);
});

// 의사 추가 버튼들 슬라이드 열리면 좀 기달려 주기
doctorAddBtns.addEventListener("click", (e) => {
    console.log(e.target);
    const aTag = e.target.closest(".link-click");
    if (aTag) {
        console.log(123);
        doctorSearchInput.value = "의사이름";
        doctorSearchInput.disabled = true;
        doctorRemoveBtn.style.display = "block";
        slide.style.transition = "height 0.3s ease";
        slide.style.height = "0px";
        slide.style.opacity = "0";
    }
});

// 의사 이름 선택했으면 엑스표시 삭제 해주기
doctorRemoveBtn.addEventListener("click", (e) => {
    doctorSearchInput.value = "";
    doctorSearchInput.disabled = false;
    doctorRemoveBtn.style.display = "none";
});

/**
 *  이미지 파일 부분입니다.
 * 이미지 파일 지우고 넣고 최대 일단 3개까지만 들어가도록 설정
 * 나중에 수정 필요 나중에는 fileImgList, fileCheck로 체크해서
 * 서버 넣겨주기
 *
 */
FileList.prototype.forEach = Array.prototype.forEach;
// 이미지 정보들이 들어가는 자리
const fileImgList = new Array();
// 어떤 이미지가 삭제되었는지 체크
const fileCheck = new Array(3).fill(false);
// 이미지 버튼 클릭하면 아예 초기화
inputFileBtn.addEventListener("click", (e) => {
    fileImgList.length = 0;
    fileCheck.fill(false);
    const lis = Array.from(
        document.getElementsByClassName("thumbnail-list-content")
    );
    lis.forEach((li) => {
        li.remove();
    });
});

inputFileBtn.addEventListener("change", (e) => {
    const files = e.target.files;
    let cnt = 0;
    files.forEach((file) => {
        const reader = new FileReader();
        const imgTag = document.createElement("img");
        const divBtn = document.createElement("div");
        const liTag = document.createElement("li");
        const divTag = document.createElement("div");
        reader.readAsDataURL(file);
        divBtn.id = "file-cancel-btn";
        liTag.classList.add("thumbnail-list-content");
        divBtn.dataset.position = cnt;
        imgTag.classList.add("thumbnail");
        divTag.classList.add(`cancel-btn-${cnt++}`);
        divTag.classList.add("cancle");
        reader.addEventListener("load", (e) => {
            const path = e.target.result;
            if (fileImgList.length > 2) {
                return;
            } else {
                fileImgList.push(path);
            }
            if (path.includes("image")) {
                imgTag.style.backgroundImage = `url(${path})`;
                ulTag.appendChild(liTag);
                liTag.appendChild(imgTag);
                liTag.appendChild(divTag);
                divTag.appendChild(divBtn);
            }
            divTag.style.display = "block";

            // 취소 버튼 누르면 썸네일 삭제하기
            divTag.addEventListener("click", (e) => {
                console.log(e.target.parentElement.parentElement);
                fileCheck[e.target.dataset.position] = true;
                e.target.parentElement.parentElement.remove();
            });
        });
    });
    inputFileBtn.value = "";
});

// 체크 박스 클릭 시 보내기 버튼 스타일 변환
checkBoxDiv.addEventListener("click", (e) => {
    if (svg.classList[2]) {
        svg.classList.remove("inactive");
        label.classList.add("inactive");
        checkBoxDiv.style.boxShadow =
            "rgb(126, 165, 242) 0px 0px 0px 2px inset";
        sendBtn.disabled = false;
    } else {
        label.classList.remove("inactive");
        svg.classList.add("inactive");
        checkBoxDiv.removeAttribute("style");
        sendBtn.disabled = true;
    }
});

// 쪽지 보내기 취소할 때 안에 있던 값들 초기화
mailSendCancleBtn.addEventListener("click", (e) => {
    mailSendModal.style.display = "none";
    mailModalInput.value = "";
    doctorSearchInput.value = "";
    doctorSearchInput.disabled = false;
    fileImgList.length = 0;
    fileCheck.fill(false);
    if (label.classList[2]) {
        label.classList.remove("inactive");
        svg.classList.add("inactive");
        checkBoxDiv.removeAttribute("style");
        sendBtn.disabled = true;
    }
    doctorRemoveBtn.style.display = "none";
    inputFileBtn.value = "";
    document.getElementById("file-img-list").innerHTML = "";
});

// 쪽지 작성부분 텍스트 영역 포커스
const textareaTag = document.getElementById("mailContent");
const textareaTagWrap = document.querySelector(".mail-content-input-container");
textareaTag.addEventListener("focus", (e) => {
    textareaTagWrap.style.borderColor = "black";
});
textareaTag.addEventListener("blur", (e) => {
    textareaTagWrap.style.borderColor = "#f2f4f6";
});
// 쪽지 열기
mailSendBtns[0].addEventListener("click", (e) => {
    mailSendModal.style.display = "flex";
    doctorSearchInput.value = "의사이름";
    doctorRemoveBtn.style.display = "block";
    hiddenIuput.value = doctorSearchInput.value;
    doctorSearchInput.disabled = true;
});

// 관심 추가 삭제
interestBtn.addEventListener("click", (e) => {
    // 관심 형태에 따라 클릭 버튼 다르게
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

// // 후기 남기기 버튼입니다. (내용이 없을 때)
// const noExistReviewBtn = document.querySelector(".noexist-search-btn");
// let noExistReviewBtnCheck = true;
// noExistReviewBtn.addEventListener("click", (e) => {
//     console.log(1111);
//     const divTag = document.querySelector(".review-register-container");
//     console.log(divTag);
//     noExistReviewBtnCheck
//         ? divTag.classList.add("active")
//         : divTag.classList.remove("active");

//     noExistReviewBtnCheck &&
//         (reviewForm[
//             "reviewContent"
//         ].placeholder = `[나중에 유저 이름] 입력해주세요.`);
//     noExistReviewBtnCheck = !noExistReviewBtnCheck;
// });
// // 후기 남기기 버튼입니다. (내용이 하나라도 있을 때)
// const existReviewBtn = document.querySelector(".exist-review-btn");
// let existReviewBtnCheck = true;
// existReviewBtn.addEventListener("click", (e) => {
//     const divTag = document.querySelector(".review-register-container");
//     console.log(divTag);
//     existReviewBtnCheck
//         ? divTag.classList.add("active")
//         : divTag.classList.remove("active");

//     existReviewBtnCheck &&
//         (reviewForm_v2[
//             "reviewContent"
//         ].placeholder = `[나중에 유저 이름] 입력해주세요.`);
//     existReviewBtnCheck = !existReviewBtnCheck;
// });
const reviewRegBtn = (className, formTag, tagClass) => {
    const btnTag = document.querySelector(`${className}`);
    let btnCheck = true;
    btnTag.addEventListener("click", (e) => {
        // console.log(btnTag);
        console.log(formTag);
        console.log(btnCheck);
        const divTag = document.querySelector(`${tagClass}`);
        btnCheck
            ? divTag.classList.add("active")
            : divTag.classList.remove("active");
        btnCheck &&
            (formTag[
                "reviewContent"
            ].placeholder = `[나중에 유저 이름] 후기를 입력해주세요.`);
        btnCheck = !btnCheck;
    });
};
reviewRegBtn(".noexist-search-btn", reviewForm_v1, ".v1");
reviewRegBtn(".exist-review-btn", reviewForm_v2, ".v2");
/**************** */

// let itemIndex = 0;
// // 만약 데이터가 없으면 무한 스크롤 안하기 일단은 주석 처리
// const maxItems = 20; // 총 20개까지만 로딩 나중에 여기에 글 목록 개수 가져오기
// const loadCount = 5; // 한 번에 5개씩

// // 아이템 5개씩 로딩하는 함수
// function loadItems(count = 5) {
//     const remaining = maxItems - itemIndex;
//     const countToLoad = Math.min(loadCount, remaining);
//     for (let i = 0; i < countToLoad; i++) {
//         listLayout.innerHTML += `
//         <li>
//             <div class="content-info">
//                 <img src="https://media.a-ha.io/aha-qna/images/v3/product/default-profile-image.webp" width="48" height="48" alt="" class="contentInfoImg" style="color: transparent">
//                 <div class="content-info-text">
//                     <div class="type-user-wrapper">
//                         <div class="depart-treatment">
//                             <div class="doctor-info">
//                                 <span class="doctorinfo-name">
//                                     의사 이름
//                                 </span>
//                             </div>
//                             <div class="depart-treatment-wrap">
//                                 <span class="first">
//                                     진료 과목
//                                 </span>
//                                 <span class="second">
//                                     안과
//                                 </span>
//                             </div>

//                         </div>
//                     </div>
//                     <!-- 주소 클릭 이벤트 -->
//                     <div class="info-container">
//                         <span class="first">
//                             소속 병원
//                         </span>
//                         <span class="second">
//                             서울 백병원
//                         </span>
//                         <span class="first detail-address">
//                             상세 주소
//                         </span>
//                         <span class="second">
//                             서울 노원구 동일로 1342 상계백병원
//                         </span>
//                     </div>
//                     <!-- /주소 클릭 이벤트 -->
//                     <div class="info-container">
//                         <span class="first">
//                             병원 전화 번호
//                         </span>
//                         <span class="second">
//                             02-123-1234
//                         </span>

//                     </div>
//                     <div class="icon-btn-wrap">
//                         <div class="icon-container">
//                             <img src="../../static/images/DrIcon-Photoroom.png" with="35" height="35" alt="">
//                             <span class="greeting">
//                                 <strong>최선</strong>을 다하겠습니다.</span>
//                         </div>
//                         <div class="btn-container">
//                             <div
//                                 class="btn-wrap">
//                                 <!-- 쪽지 클릭 이벤트 -->
//                                 <button class="btnshape mail-send-btn">
//                                     <img src="../../static/images/email.png">
//                                     <span>쪽지 보내기</span>
//                                 </button>
//                                 <!-- /쪽지 클릭 이벤트 -->
//                                 <!-- 관심 추가 클릭 이벤트 -->
//                                 <button class="btnshape interest-btn active">
//                                     <span>관심 중
//                                     </span>
//                                     <img src="../../static/images/check.png">
//                                 </button>
//                                 <!-- /관심 추가 클릭 이벤트 -->
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//     </li>
//         `;
//         itemIndex++;
//     }
// }

// // IntersectionObserver 생성
// const observer = new IntersectionObserver((entries) => {
//     if (entries[0].isIntersecting) {
//         loadItems(); // 추가 아이템 로딩
//         console.log(mailSendBtns);
//     }
// });

// if (itemIndex >= maxItems) {
//     observer.disconnect();
// }

// // sentinel 엘리먼트 관찰 시작
// observer.observe(document.getElementById("intersectionObserverLayout"));

// // 처음에 5개만 로딩
// // loadItems();
/****************** */
