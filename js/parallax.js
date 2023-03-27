let luna = document.getElementById('luna');
let montainFront = document.getElementById('montain-front');
let montainBack = document.getElementById('montain-back');
let textoPortada = document.getElementById('text-b');
let containerApi = document.getElementById('container-api');
let stars = document.getElementById('stars');

window.addEventListener('scroll',() => {
        let value = window.scrollY;
        console.log(value);
        stars.style.left = value * 0.25 + 'px';
        luna.style.top =  value *0.25 + 50 + '%';
        montainBack.style.top =  120 + value/3 + 'px';
        montainBack.style.right = value * 0.5 + 'px';

    });