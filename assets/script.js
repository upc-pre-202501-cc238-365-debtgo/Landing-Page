document.querySelector('.menu-icon').addEventListener('click', function () {
    document.querySelector('.navbar').classList.toggle('active');
});

document.querySelector('.navbar__ul').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
