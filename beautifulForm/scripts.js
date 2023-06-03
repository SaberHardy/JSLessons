function nextSlide(parent, nextForm) {
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}

function validateUser(user) {
    if (user.value.length < 6) {
        error('#FD3E52FF');
    } else {
        error('linear-gradient(#94f199, #4e7efc)');
        return true;
    }
}

function validateEmail(email) {
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validation.test(email.value)) {
        error('linear-gradient(#94f199, #4e7efc)');

        return true;
    } else {
        error('#FD3E52FF');
    }
}

function animatedForm() {
    const arrows = document.querySelectorAll('.fa-arrow-circle-right');

    arrows.forEach(arrow => {

        arrow.addEventListener('click', () => {
            // this will return to us the current element
            // the input that the user see
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;

            if (input.type === 'text' && validateUser(input)) {
                nextSlide(parent, nextForm);
            } else if (input.type === 'email' && validateEmail(input)) {
                nextSlide(parent, nextForm);

            }
        });
    });
}


function error(color) {
    document.body.style.background = color;
}

animatedForm();