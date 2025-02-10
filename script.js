document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("loaded");
});

document.querySelectorAll("*").forEach(el => el.style.animation = "none");
