var btn = document.getElementById('btn');
var light = document.getElementById('light');
var hero = document.getElementById('hero');
var he = document.getElementById('he');

function toggleBtn() {
    btn.classList.toggle('active');
    light.classList.toggle('on');

    hero.classList.toggle('dark-mode');

    if (hero.classList.contains('dark-mode')) {
        he.style.color = '#000000';
    } else {
        he.style.color = '#ffffff';
    }
}
