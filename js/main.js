function components() {

    var hamburger = document.querySelector('.header__nav__hamburger--bs')
    var menu = document.querySelector('.header__nav__menu')

    function openNav() {
        menu.classList.toggle('header__nav__menu--open')
    }

    hamburger.addEventListener('click', openNav)
}

components()