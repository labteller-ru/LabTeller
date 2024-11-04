document.querySelectorAll('.analyses__accordion-toggle').forEach((button) => {
    button.addEventListener('click', function () {
        const activeAccordion = document.querySelector('.accordion__container-active');
        const currentAccordion = this.closest('.accordion__container');
        const currentBox = currentAccordion.querySelector('.accordion__box');
        const svgIcon = this.querySelector('svg');

        if (activeAccordion && activeAccordion !== currentAccordion) {
            activeAccordion.classList.remove('accordion__container-active');
            activeAccordion.querySelector('.accordion__box').classList.remove('accordion__box-active');
            const activeSvg = activeAccordion.querySelector('svg');
            activeSvg.innerHTML = `
                <path d="M13.3335 20H26.6668" stroke="#692FFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20 26.6666V13.3333" stroke="#692FFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.0002 36.6666H25.0002C33.3335 36.6666 36.6668 33.3333 36.6668 24.9999V14.9999C36.6668 6.66659 33.3335 3.33325 25.0002 3.33325H15.0002C6.66683 3.33325 3.3335 6.66659 3.3335 14.9999V24.9999C3.3335 33.3333 6.66683 36.6666 15.0002 36.6666Z" stroke="#692FFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            `;
        }

        currentAccordion.classList.toggle('accordion__container-active');
        currentBox.classList.toggle('accordion__box-active');

        if (currentAccordion.classList.contains('accordion__container-active')) {
            svgIcon.innerHTML = `
                <path d="M13.3335 20H26.6668" stroke="#692FFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.0002 36.6666H25.0002C33.3335 36.6666 36.6668 33.3333 36.6668 24.9999V14.9999C36.6668 6.66659 33.3335 3.33325 25.0002 3.33325H15.0002C6.66683 3.33325 3.3335 6.66659 3.3335 14.9999V24.9999C3.3335 33.3333 6.66683 36.6666 15.0002 36.6666Z" stroke="#692FFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            `;
        } else {
            svgIcon.innerHTML = `
                <path d="M13.3335 20H26.6668" stroke="#692FFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20 26.6666V13.3333" stroke="#692FFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.0002 36.6666H25.0002C33.3335 36.6666 36.6668 33.3333 36.6668 24.9999V14.9999C36.6668 6.66659 33.3335 3.33325 25.0002 3.33325H15.0002C6.66683 3.33325 3.3335 6.66659 3.3335 14.9999V24.9999C3.3335 33.3333 6.66683 36.6666 15.0002 36.6666Z" stroke="#692FFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            `;
        }
    });
});


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

const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    centeredSlides: true,
    navigation: {
      nextEl: '.carousel__button--next',
      prevEl: '.carousel__button--prev',
    },
    loop: true,
});


document.querySelector('.modal__toggle').addEventListener('click', function() {
    const overlay = document.querySelector('.overlay-modal');
    overlay.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll');
});

document.querySelector('.modal__close').addEventListener('click', function() {
    closeModal();
});

document.querySelector('.overlay-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

function closeModal() {
    const overlay = document.querySelector('.overlay-modal');
    overlay.classList.add('hidden');
    document.body.classList.remove('no-scroll');
}

document.getElementById('modal-form').addEventListener('submit', function(e) {
    e.preventDefault();  
    
    const form = e.target;
    const formData = new FormData(form);
    const submitButton = document.getElementById('submit-button');
    
    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'X-CSRFToken': form.querySelector('[name=csrfmiddlewaretoken]').value,
        },
    })
    .then(response => response.json()) 
    .then(data => {
        if (data.success) {
            submitButton.textContent = 'Заявка отправлена';
            submitButton.classList.add('inactive'); 
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
