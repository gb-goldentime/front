document.addEventListener("DOMContentLoaded", () => {
    const form = document.forms["form"];
    const emailInput = form["emailname"];
    const passwordInput = form["password"];
    const emailMessage = document.getElementById("email-message");
    const button = document.querySelector("button[type=button]");

    // 이메일 유효성 검사
    button.addEventListener("click", () => {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // 이메일 검사
        if (!email) {
            emailMessage.textContent = "이메일을 입력해 주세요.";
            emailInput.classList.remove("valid", "input-filled");
            emailInput.classList.add("invalid");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            emailMessage.textContent = "올바른 이메일 형식이 아닙니다.";
            emailInput.classList.remove("valid", "input-filled");
            emailInput.classList.add("invalid");
        } else {
            emailMessage.textContent = "올바른 이메일 형식입니다.";
            emailInput.classList.remove("invalid");
            emailInput.classList.add("valid", "input-filled");
        }

        // 비밀번호 검사
        if (password.length < 6) {
            passwordInput.classList.remove("valid", "input-filled");
            passwordInput.classList.add("invalid");
        } else {
            passwordInput.classList.remove("invalid");
            passwordInput.classList.add("valid", "input-filled");
        }
    });

    // 실시간 입력 시 클래스 동적 처리
    [emailInput, passwordInput].forEach((input) => {
        input.addEventListener("input", () => {
            if (input.value.trim()) {
                input.classList.add("input-filled");
            } else {
                input.classList.remove("input-filled", "valid", "invalid");
            }
        });
    });
});
