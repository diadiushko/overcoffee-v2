const navButtons = document.querySelectorAll("nav li");

const navActive = (number) => {
    navButtons.forEach((e) => e.classList.remove("active"));
    navButtons[number].classList.add("active");
};

document.addEventListener("click", (event) => {
    if (event.target.dataset.nav) {
        navActive(parseInt(event.target.dataset.nav));
    }
});

const scrollListener = (e) => {
    document.removeEventListener("mousewheel", scrollListener);
    let current;
    navButtons.forEach((e, i) =>
        e.classList.contains("active") ? (current = i) : void 0
    );
    if (e.wheelDelta < 0) {
        window.scrollBy(0, window.innerHeight);
        current =
            current === navButtons.length - 1 ? navButtons.length - 1 : current + 1;
        navActive(current);
    } else {
        window.scrollBy(0, -window.innerHeight);
        current =
            current === 0 ? 0 : current - 1;
        navActive(current);
    }
    setTimeout(() => {
        document.addEventListener("mousewheel", scrollListener);
    }, 500);
}
document.addEventListener("mousewheel", scrollListener);