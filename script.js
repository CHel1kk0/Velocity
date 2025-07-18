// Tabs
const tabsBtns = document.querySelectorAll(".tabs__nav button");
const tabsItems = document.querySelectorAll(".tabs__item");
function hideTabs() {
    tabsItems.forEach((item => item.classList.add("hide")));
    tabsBtns.forEach((item => item.classList.remove("active")));
}

function showTab(index) {
    tabsItems[index].classList.remove("hide");
    tabsBtns[index].classList.add("active");

}

hideTabs();
showTab(0);

tabsBtns.forEach((item, index) => {
    item.addEventListener("click", () => {
        hideTabs();
        showTab(index);
    })
});

// Anchors
const anchors = document.querySelectorAll('.header__nav a');
anchors.forEach(anc => {
    anc.addEventListener('click', function(e) {
        e.preventDefault();
        const id = anc.getAttribute("href");
        document.querySelector(id).scrollIntoView({
            behavior: "smooth",
            block: "start"})
})})
