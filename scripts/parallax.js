const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    let speed = window.scrollY / -1.5;
    if (speed != 0)
        header.style.backgroundPosition = "0" + speed + "px";
});