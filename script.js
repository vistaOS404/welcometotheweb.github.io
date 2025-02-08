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
document.addEventListener("mousemove", function (e) {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            let particle = document.createElement("div");
            particle.classList.add("cursor-particle");
            document.body.appendChild(particle);

            let size = Math.random() * 8 + 4; // Random size between 4px and 12px
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${e.pageX}px`;
            particle.style.top = `${e.pageY}px`;

            setTimeout(() => {
                particle.remove();
            }, 1000);
        }, i * 50); // Staggered effect
    }
});
