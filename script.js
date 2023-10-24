const vids = document.querySelectorAll('video');

vids.forEach(vid => {
    vid.addEventListener("mouseenter", (event) => {
        event.target.play();
    })
    vid.addEventListener("mouseleave", (event) => {
        event.target.pause();
    })
})
