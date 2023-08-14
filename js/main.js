$(document).ready(function(){
    $('.carousel').carousel();
});

function changeBg (bg, title) {
    let banner = document.querySelector(".banner");
    let contents = document.querySelectorAll(".content");
    banner.style.backgroundImage  = `url("../assets/movies/${bg}")`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'cover';

    contents.forEach(e => {
        e.classList.remove("active");
        if (e.classList.contains(title)) {
            e.classList.add("active");
        }
    });
}

// document.querySelector(".carousel-item").onclick = changeBg;

function toggleVideo () {
    let trailer = document.querySelector(".trailer");
    let video = document.querySelector("video");
    video.pause();
    trailer.classList.toggle("active");
}

document.querySelector(".close").onclick = toggleVideo;
document.querySelector(".play").onclick = toggleVideo;
