const quizData = [
    {
        question: 'What is my name?',
        a: 'Saber',
        b: 'Drive',
        c: 'Anna',
        d: 'Nast',
        correct: 'a',
    },
    {
        question: 'How many days we have?',
        a: '365',
        b: '233',
        c: '360',
        d: '556',
        correct: 'a',
    },
    {
        question: 'What is the best programing language?',
        a: 'Matlab',
        b: 'Js',
        c: 'Java',
        d: 'Python',
        correct: 'd',
    },
    {
        question: 'What is the best place to live?',
        a: 'Kube',
        b: 'USA',
        c: 'Algeria',
        d: 'Brazil',
        correct: 'c',
    },
]

const questionEl = document.getElementById('question-text')
const quiz = document.getElementById('quiz');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const buttonSubmit = document.getElementById('submit-answer');

let currentQuiz = 0;
let answer = undefined;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {
    const answerEls = document.querySelectorAll('.answer');

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswer() {
    const answerEls = document.querySelectorAll('.answer');

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answerEl.checked = false;
        }
    });
}

buttonSubmit.addEventListener('click', () => {
    const answer = getSelected();

    // console.log(answer);
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            // show results
            // alert(`You have score ${score} of ${quizData.length}`);
            quiz.innerHTML = `<h2>You answerd correctly ${score}/${quizData.length} questions</h2>`
            if (score > quizData.length / 2) {
                quiz.classList.add('green-color');
            } else {
                quiz.classList.add('red-color');
            }
        }
    }
});



