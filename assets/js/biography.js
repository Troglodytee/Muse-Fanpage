var sections = [0, 0, 0, 0, 0, 0, 0, 0, 0]

function biographyAction(n) {
    sections[n] = 1-sections[n]
    if (sections[n]) {
        document.getElementById("biography-indicator-"+n).style.transform = "rotate(90deg)";
        document.getElementById("biography-text-"+n).classList.remove("d-none");
    }
    else {
        document.getElementById("biography-indicator-"+n).style.transform = "rotate(0deg)";
        document.getElementById("biography-text-"+n).classList.add("d-none");
    }
}