document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("loaded");
});
document.addEventListener("mousemove", function (e) {
    const cursor = document.getElementById("custom-cursor");
    if (cursor) {  // Prevent errors if the cursor is missing
        cursor.style.left = e.pageX + "px";
        cursor.style.top = e.pageY + "px";
    }
});
