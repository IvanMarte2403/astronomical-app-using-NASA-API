let luna = document.getElementById('luna');
let montainFront = document.getElementById('montain-front');
let montainBack = document.getElementById('montain-back');
let textoPortada = document.getElementById('text-b');
let containerApi = document.getElementById('container-api');
let stars = document.getElementById('stars');
let animationText = document.getElementById('wrapper-title');

window.addEventListener('scroll',() => {
        let value = window.scrollY;
        //  console.log(value);
        stars.style.left = value * 0.25 + 'px';
        if (value <= 400) {
        luna.style.top =  value *0.25 + 50 + '%';
        
        }
        montainBack.style.top =  120 + value/3 + 'px';
        if(value >=150){
        montainBack.style.right = value * 0.5 + 'px';
        }
    });

    function titleAnimation(title){
        let titleWords = title;
        console.log(titleWords)
        animationText.style.width = titleWords.length  + 3+ 'ch';
        console.log(titleWords.length);
        animationText.style.animation = `typing 2s steps(${titleWords.length}), blink .5s infinite step-end alternate`;
        // animationText.style.width = 0 + 'ch';
    }    
   
