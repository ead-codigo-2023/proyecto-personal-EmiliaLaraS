/*Scroll de la barra principal (barra negra*/
document.addEventListener('DOMContentLoaded', function () {
    var blackBar = document.querySelector('.black-bar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            blackBar.classList.add('scroll-down');
        } else {
            blackBar.classList.remove('scroll-down');
        }
    });
});
