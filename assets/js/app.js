const ham = document.querySelector(".hamburger");
const links = document.querySelector(".links");
const container = document.querySelector(".links-container");
const year = document.querySelector(".year");
// Nav toggle functionality
ham.addEventListener("click", function () {
    const containerHeight = container.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if (containerHeight == 0) {
        container.style.height = `${linksHeight}px`;
    } else {
        container.style.height = 0;
    }
    ham.classList.toggle("open");
    links.classList.toggle("hidden");
})
// year functionality
const presentYear = new Date().getFullYear();
year.innerText = presentYear;
// Typewriter function
function Typewriter(txtElement, words, wait) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}
// Type Method
Typewriter.prototype.type = function () {
    const i = this.wordIndex % this.words.length;
    const fullTxt = this.words[i];
    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    // insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // type speed
    let typeSpeed = 200;
    if (this.isDeleting) {
        typeSpeed /= 2;
    }
    if (!this.isDeleting && this.txt == fullTxt) {
        typeSpeed = this.wait;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt == "") {
        this.isDeleting = false;
        this.wordIndex++;
        typeSpeed = 400;
    }
    // Timeout
    setTimeout(() => this.type(), typeSpeed)
}
// Init on DOM Load
window.addEventListener("DOMContentLoaded", init);
// Init app
function init() {
    const txtElement = document.querySelector("#roles");
    const words = JSON.parse(txtElement.dataset.words);
    const wait = txtElement.dataset.wait;
    // init typewriter
    new Typewriter(txtElement, words, wait);
}
// form functionality
const inputs = document.querySelectorAll(".inputs");

window.addEventListener("load", function () {
    inputs.forEach(function (input) {
        input.value = "";
    })
})







