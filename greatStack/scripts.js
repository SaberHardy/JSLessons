var btn = document.getElementById('btn');
var light = document.getElementById('light');
var hero = document.getElementById('hero');
var he = document.getElementById('he');

function toggleBtn() {
    btn.classList.toggle('active');
    light.classList.toggle('on');

    hero.classList.toggle('dark-mode');
console.log(hero.classList)
    if(hero.classList.contains('dark-mode')) {
        he.style.color = '#0c0c0c';
    }
}
