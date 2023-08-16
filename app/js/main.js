const btnHamburger = document.getElementById('btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('header');
const layer = document.querySelector('.layer');
const waneItems = document.querySelectorAll('.fizzle-out');

btnHamburger.addEventListener('click', () => {
    console.log('click hamburger');

    if (btnHamburger.classList.contains('active')) { // Closing the menu
        btnHamburger.classList.remove('active');
        body.classList.remove('disablescroll');
        header.classList.remove('active');
        waneItems.forEach(function(element){
            element.classList.remove('fade-in'); // Remove fade-in class
            element.classList.add('fade-out');
        });
    } else { // Opening the menu
        btnHamburger.classList.add('active');
        body.classList.add('disablescroll');
        header.classList.add('active');
        waneItems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }
});
