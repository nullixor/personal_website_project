window.addEventListener("scroll", function() {
    const element = this.document.querySelector("#top");

    if (this.window.scrollY > 100) {
        element.classList.add("visible");
    } else {
        element.classList.remove("visible");
    }
})