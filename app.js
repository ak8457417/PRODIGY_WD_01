function hover(x) {
    x.style.color = "red";
    x.style.backgroundColor = "#74564c";
    x.style.textDecoration = "underline";
    x.style.cursor = "pointer";
}

function noHover(x) {
    x.style.color = "#66fcf1";
    x.style.backgroundColor = "transparent";
    x.style.textDecoration = "none";
}

function openNav() {
    document.getElementById("menu").style.display = "block";
}

function closeNav() {
    document.getElementById("menu").style.display = "none";
}

function mailOver(x) {
    x.style.textDecoration = "underline";
}

function mailOut(x) {
    x.style.textDecoration = "none";
}

// Close the nav menu when an item is clicked (mobile)
document.querySelectorAll('#menu a').forEach(anchor => {
    anchor.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            document.getElementById("menu").style.display = "none";
        }
    });
});