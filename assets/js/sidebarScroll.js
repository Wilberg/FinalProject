var stickystart = document.getElementById('stickystart');
var stickybox = document.getElementById('stickybox');

window.addEventListener('scroll', () => {
    if (window.scrollY >= stickystart.offsetTop + 20) {
        stickybox.setAttribute('class', 'sticked');
    } else {
        stickybox.removeAttribute('class');
    }
});