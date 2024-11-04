function toggleAccordion(button) {
    const accordionBody = button.closest('.accordion-main__body');
    const content = accordionBody.querySelector('.accordion-content');
    const plusIcon = button.querySelector('.plus-icon');
    const minusIcon = button.querySelector('.minus-icon');

    document.querySelectorAll('.accordion-content.open').forEach(openContent => {
        if (openContent !== content) {
            openContent.classList.remove('open');
            const openButton = openContent.closest('.accordion-main__body').querySelector('.accordion-main__button');
            openButton.querySelector('.plus-icon').style.display = 'block';
            openButton.querySelector('.minus-icon').style.display = 'none';
        }
    });

    content.classList.toggle('open');

    if (content.classList.contains('open')) {
        plusIcon.style.display = 'none';
        minusIcon.style.display = 'block';
    } else {
        plusIcon.style.display = 'block';
        minusIcon.style.display = 'none';
    }
}