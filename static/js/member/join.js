const usernameInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

function toggleLoginButton() {
    const isUsernameFilled = usernameInput.value.trim() !== "";
    const isPasswordFilled = passwordInput.value.trim() !== "";

    if (isUsernameFilled && isPasswordFilled) {
        loginBtn.disabled = false;
        loginBtn.classList.add("active");
    } else {
        loginBtn.disabled = true;
        loginBtn.classList.remove("active");
    }
}

usernameInput.addEventListener("input", toggleLoginButton);
passwordInput.addEventListener("input", toggleLoginButton);
