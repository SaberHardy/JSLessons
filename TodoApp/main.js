let form = document.getElementById('form');
let input = document.getElementById('input');
let msg = document.getElementById('msg');
let post = document.getElementById('posts');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    formValidation();
});

let formValidation = () => {
    if (input.value === '') {
        msg.innerHTML = "One of your fields is empty!!";

    } else {
        console.log('form submitted');
        msg.innerHTML = "";
        input.value = '';
    }
};