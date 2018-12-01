var stickystart = document.getElementById('stickystart');
var stickybox = document.getElementById('stickybox');

window.addEventListener('scroll', () => {
    if (window.innerWidth > 850) {
        if (window.scrollY >= stickystart.offsetTop + stickystart.clientHeight - stickybox.clientHeight) {
            stickybox.setAttribute('class', 'unsticked-bottom');
        } else if (window.scrollY >= stickystart.offsetTop + 20) {
            stickybox.setAttribute('class', 'sticked');
        } else {
            stickybox.removeAttribute('class');
        }
    }
});