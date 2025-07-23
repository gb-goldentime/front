const check = document.querySelectorAll(".boot-check-box");
check.forEach((box) => {
    box.addEventListener("click", () => {
        box.classList.toggle("checked");
    });
});
