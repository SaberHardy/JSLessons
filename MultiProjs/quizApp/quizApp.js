const quizData = [
    {
        question: 'What is my name?',
        a: '10',
        b: '20',
        c: '30',
        d: '45',
        correct: 'b',
    },
    {
        question: 'How many days we have?',
        a: '77',
        b: '7',
        c: '1',
        d: '5',
        correct: 'b',
    },
    {
        question: 'What is the best programing language?',
        a: 'Python',
        b: 'Js',
        c: 'Java',
        d: 'Matlab',
        correct: 'a',
    },
    {
        question: 'What is the best place to live?',
        a: 'Algeria',
        b: 'USA',
        c: 'Kube',
        d: 'Brazil',
        correct: 'a',
    },
]

const questionEl = document.getElementById('question-text')

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const buttonSubmit = document.getElementById('submit-answer');

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    currentQuiz++;
}

buttonSubmit.addEventListener('click', function (){
    if(currentQuiz < quizData.length){
        loadQuiz()
    } else {
        alert('you have finished the test!');
    }
});