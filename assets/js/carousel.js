var index = 0;
var clips = [
    ["Something Human", "azAEHCQgcUI"],
    ["Thought Contagion", "QQ_3S-IQm38"],
    ["Dig Down", "b4ozdiGys5g"],
    ["Madness", "Ek0SgwWmF9"],
    ["Hyper Music", "tjm3NyQ6DYw"],
    ["Aftermath", "YkB9a_DR-7A"],
    ["Mercy", "yj8Xpdx60Ws"],
    ["Dead Inside", "I5sJhSNUkwQ"],
    ["Resistance", "TPE9uSFFxrI"],
    ["Undisclosed Desires", "R8OOWcsFj0U"],
];

for (var i = 0; i < clips.length; i++) {
    var result = "";
    for (var j = 0; j < clips[i][0].length; j++)
    {
        if (clips[i][0][j] == ' ') {result += '-';}
        else if (65 <= clips[i][0].charCodeAt(j) && clips[i][0].charCodeAt(j) <= 90) {result += String.fromCharCode(clips[i][0].charCodeAt(j)+32);}
        else {result += clips[i][0][j];}
    }
    clips[i].push(result);
}

function loadClip() {
    var image = document.getElementById("clip-image");
    image.src = "assets/img/clips/"+clips[index][2]+".jpg";
    image.alt = "Lien vers le clip de '"+clips[index][0]+"'";
    // image.style.backgroundImage = "url("+"'assets/img/clips/"+clips[index][2]+".jpg')";
    // image.style.backgroundRepeat = "no-repeat";
    // image.style.backgroundSize = "cover";
    document.getElementById("clip-link").href = "https://www.youtube.com/watch?v="+clips[index][1];
    document.getElementById("clip-name").textContent = clips[index][0];
    document.getElementById("caption-"+index).classList.add("button-active");
}

function deselectClip() {document.getElementById("caption-"+index).classList.remove("button-active");}

function previousClip() {
    deselectClip();
    index--;
    if (index < 0) {index = clips.length-1;}
    loadClip();
    document.getElementById("clip-link").focus();
}

function nextClip() {
    deselectClip();
    index++;
    if (index >= clips.length) {index = 0;}
    loadClip();
    document.getElementById("clip-link").focus();
}

function selectClip(new_index) {
    deselectClip();
    index = new_index;
    loadClip();
    document.getElementById("clip-link").focus();
}