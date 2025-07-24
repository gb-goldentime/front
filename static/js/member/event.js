const categories = document.querySelectorAll(".mypage-category-wrapper");

categories.forEach((el) => {
    el.addEventListener("click", () => {
        categories.forEach((btn) =>
            btn.classList.remove("mypage-category-blue")
        );
        el.classList.add("mypage-category-black");
    });
});
