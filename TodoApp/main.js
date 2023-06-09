let form = document.getElementById('form');
let input = document.getElementById('input');
let msg = document.getElementById('msg');
let posts = document.getElementById('posts');
let data = {};

form.addEventListener('submit', (event) => {
    event.preventDefault();
    formValidation();
});

let formValidation = () => {
    if (input.value === '') {
        msg.innerHTML = "One of your fields is empty!!";
    } else {
        console.log('form submitted');
        acceptData();

        msg.innerHTML = "";
    }
};

let acceptData = () => {
    data['text'] = input.value;
    console.log(data);
    createPost();
}

let createPost = () => {
    posts.innerHTML += `
    <div>
        <p>${data.text}</p>
        <span class="options">
            <i onclick="editPost(this)" class="fas fa-edit"></i>
            <i onclick="deletPost(this)" class="fas fa-trash-alt"></i>
        </span>
    </div>
    `;
    input.value = '';
}