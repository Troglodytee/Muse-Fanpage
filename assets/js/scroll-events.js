var titles = [
    "biography",
    "discography",
    "clips",
    "networks",
];

window.addEventListener('scroll', function() {
    if (document.getElementById("header").getBoundingClientRect().top == 0) {document.getElementById("up-arrow").classList.add("d-none");}
    else {document.getElementById("up-arrow").classList.remove("d-none");}
    var found = 0;
    for (var i = 0; i < titles.length; i++) {
        var element = document.getElementById(titles[i]);
        var position = element.getBoundingClientRect();
        if (!found && position.top >= 0 && position.bottom <= this.window.innerHeight) {
            element.classList.add("text-decoration-underline");
            found = 1;
        }
        else {element.classList.remove("text-decoration-underline");}
    }
});

function scrollToTop() {
    scroll({top: 0, left: 0, behavior: 'smooth'});
    document.getElementById("jump-link").focus({preventScroll: "false"});
}

function focusJumpLink() {document.getElementById("jump-link").focus();}