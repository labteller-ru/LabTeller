const toggleButton = document.querySelector('.menu__toggle');
const burgerMenu = document.querySelector('.burger-menu');
const overlay = document.querySelector('.overlay');

const burgerIcon = `
    <svg class="menu-icon" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 7.5H21" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M3 12.5H21" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M3 17.5H21" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
`;

const closeIcon = `
    <svg class="close-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 6L18 18" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M18 6L6 18" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
`;

toggleButton.addEventListener('click', function() {
    burgerMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('no-scroll');

    const icon = burgerMenu.classList.contains('active') ? closeIcon : burgerIcon;
    toggleButton.querySelector('svg').outerHTML = icon;
});

overlay.addEventListener('click', function() {
    burgerMenu.classList.remove('active');
    this.classList.remove('active');
    document.body.classList.remove('no-scroll'); 

    toggleButton.querySelector('svg').outerHTML = burgerIcon;
});
