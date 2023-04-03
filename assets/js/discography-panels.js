var panel = 0;

function hide() {
    var elements = document.getElementsByClassName("hidden-discography");
    for (var i = 0; i < elements.length; i++) {elements[i].classList.add("d-none");}
    document.getElementById("see-more").style.display = "inline";
}

function seeMore() {
    var elements = document.getElementsByClassName("hidden-discography");
    for (var i = 0; i < elements.length; i++) {elements[i].classList.remove("d-none");}
    document.getElementById("see-more").style.display = "none";
    if (panel) {document.getElementById("lives-first-extend").focus();}
    else {document.getElementById("albums-first-extend").focus();}
}

function switchToAlbums() {
    panel = 0;
    document.getElementById("albums-button").classList.add("button-active");
    document.getElementById("lives-button").classList.remove("button-active");
    document.getElementById("albums-panel").classList.remove("d-none");
    document.getElementById("lives-panel").classList.add("d-none");
    hide();
}

function switchToLives() {
    panel = 1;
    document.getElementById("albums-button").classList.remove("button-active");
    document.getElementById("lives-button").classList.add("button-active");
    document.getElementById("albums-panel").classList.add("d-none");
    document.getElementById("lives-panel").classList.remove("d-none");
    hide();
}