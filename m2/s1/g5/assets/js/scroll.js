window.addEventListener('scroll', () => {
    let top = window.scrollY
    let nav = document.querySelector('.nav-wrapper')
    let btn = document.getElementById('navBtn')
    top > 550 ? (nav.classList.add('nav-wrapper-scrolled') ,
    btn.classList.add('nav-btn-scrolled')) : 
    (nav.classList.remove('nav-wrapper-scrolled') ,
    btn.classList.remove('nav-btn-scrolled'))


})