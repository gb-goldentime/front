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
// 이미지 파일 연달아 붙이는 공간
const ulTag = document.getElementById("file-img-list");
// 쪽지 작성 모달 띄우기 버튼
const mailSendBtns = document.querySelectorAll(".mail-send-btn");
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

const textWarnCheck = (tag) => {
    let count = tag.value.length;
    const temp = document.querySelector(".mail-title-warn.text-warn");
    temp.setAttribute("data-count", count);
    // console.log(111);
};

/**
 * 강사님 모달 코드 부분 응용한 곳
 */
let check = false;
const doctorAddBtns = document.querySelectorAll(
    "ul.mail-search-doctor-name-list li  a.link-click"
);

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

// 관심 형태에 따라 클릭 버튼 다르게
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
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

/********************************************************************************/

// 의사 검색창에서의 동작
doctorSearchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter" && !check) {
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
            slide.style.height = "0";
            slide.style.opacity = "0";
            return;
        }
    });
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
doctorAddBtns.forEach((doctorAddbtn) => {
    doctorAddbtn.addEventListener("click", (e) => {
        // 의사 이름 셋팅 및 상태 처리
        // console.log(doctorAddbtn);
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
                fileCheck[e.target.dataset.position] = true;
                // e.target.parentElement.parentElement.remove();
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
    if (label.classList[2]) {
        label.classList.remove("inactive");
        svg.classList.add("inactive");
        checkBoxDiv.removeAttribute("style");
        sendBtn.disabled = true;
    }
    doctorRemoveBtn.style.display = "none";
    if (document.getElementById("thumbnail-wrap")) {
        inputFileBtn.value = "";
        document.getElementById("thumbnail-wrap").remove();
        cancelBtn.style.display = "none";
    }
    // console.log(document.getElementsByClassName("thumbnail-wrap")[0]);
});

// 모달 전에 쪽지 보내기 누르면 모달이 보이게 하기
mailSendBtns.forEach((mailSendBtn) => {
    mailSendBtn.addEventListener("click", (e) => {
        mailSendModal.style.display = "flex";
        // 여기서 나중에 버튼에서 의사 pk값 가져와서 해당 의사 정보를 의사 검색 창에 넣어주고
        // 제거 버튼도 보이게 해주기
    });
});

// 헤더 바로 밑에 부분 버튼 모음들
const coachMarkBtns = document.querySelectorAll(
    "ul.coach-mark-container li button"
);

// 원장 병원 기타(미정 삭제할 수 도 있음) 버튼 클릭 이벤트 일단은
// 색깔만 변하게
coachMarkBtns.forEach((coachMarkBtn) => {
    coachMarkBtn.addEventListener("click", (e) => {
        const temp = document.querySelector(
            "ul.coach-mark-container li button span.active"
        );
        console.log(temp);
        // if (temp.parentElement === coachMarkBtn) {
        //     console.log(11);
        //     e.preventDefault();
        //     return;
        // }
        temp.classList.remove("active");
        e.target.classList.add("active");
        console.log();
    });
});
