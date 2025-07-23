let modalCheck;
let buttonsCheck = true;
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

const buttons = document.querySelectorAll("button.interest-btn");

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

const mailButtons = document.querySelectorAll("button.interest-btn");

mailButtons.forEach((button) => {
    button.addEventListener("click", (e) => {});
});

const showMailModal = () => {
    modalCheck = false;
    document.querySelector("div.warn-modal").style.animation = "popUp 0.5s";
    document.querySelector("div.modal").style.display = "flex";
    setTimeout(() => {
        modalCheck = true;
    }, 500);
};
