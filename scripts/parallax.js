const header = document.querySelector("header");
const sky = document.querySelector(".mobile-header-image");
const trees = document.querySelector(".mobile-header-image-2");
const signature = document.querySelector(".logo");

window.addEventListener("scroll", () => {
    let headerSpeed = window.scrollY / -2.5;
    let skySpeed = window.scrollY / -8;
    let treeSpeed = window.scrollY / -2;

    if (window.innerWidth >= 768 && headerSpeed != 0) {
        header.style.backgroundPosition = "0" + headerSpeed + "px";
    } else if (skySpeed != 0 && treeSpeed != 0) {
        sky.style.backgroundPosition = "0" + skySpeed + "px";
        trees.style.backgroundPosition = "0" + treeSpeed + "px";
    }
});