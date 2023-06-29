(function () {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clearBtn = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    buttons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            let value = event.target.dataset.num;
            screen.value += value;
        });
    });

    equal.addEventListener('click', function (event) {
        if (screen.value === '') {
            screen.value = 'enter a value';
        } else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    clearBtn.addEventListener('click', function (event) {
        if (screen.value !== '') {
            screen.value = '';
        }
    });
})();
