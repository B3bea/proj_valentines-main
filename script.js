function rolar(timeline) {
    var timeline = document.querySelector(timeline);
    if (timeline) {
        window.scrollTo({
            behavior: 'smooth',
            top: timeline.offsetTop
        });
    }
}