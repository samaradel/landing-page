//global variables
const list = document.getElementById("navbar__list");
const nav = document.querySelectorAll("section");
const tests = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
};

//for all elements
nav.forEach((el) => {
    const element = `<li class='${el.className} menu__link' data-link=${el.id}><a href="#${el.id}">${el.dataset.nav}</li>`;
    list.insertAdjacentHTML("beforeend", element);
});

list.addEventListener("click", (e) => {
    //preventing default
    e.preventDefault();
    let parent;
    //check if data-link has a attribute or not
    if (e.target.hasAttribute("data-link")) {
        parent = e.target;
    } else {
        parent = e.target.parentElement;
    }

    //scrolling
    const scrollingelement = document.getElementById(parent.dataset.link);
    scrollingelement.scrollIntoView({ block: "end", behavior: "smooth" });
});

const forActive = (all) => {
    all.forEach((din) => {
        const listElement = document.querySelector(
            `.menu__link[data-link='${din.target.id}']`
        );
        const sec = document.getElementById(din.target.id);

        if (din && din.isIntersecting) {
            listElement.classList.add("active");
            sec.classList.add("active");
        } else {
            if (sec.classList.contains("active")) {
                sec.classList.remove("active");
            } else if (listElement.classList.contains("active")) {
                listElement.classList.remove("active");
            }
        }
    });
};

const observer = new IntersectionObserver(forActive, tests);
nav.forEach((ddd) => {
    observer.observe(document.getElementById(ddd.id));
});