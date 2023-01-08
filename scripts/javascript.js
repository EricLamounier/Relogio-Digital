function carregar () {
    var cumprimento = document.querySelector('#cumprimento');
    var img = document.querySelector('#image');
    var body = document.querySelector('#body');

    var hour = document.querySelector('#ponteiro-hora');
    var minute = document.querySelector('#ponteiro-minuto');
    var second = document.querySelector('#ponteiro-segundo');

    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    var segundo = data.getSeconds();

    //ROLOGIO DIGITAL
    var text_hora;
    var text_minuto;
    var text_segundo;

    if(hora != 1){
        text_hora = ' horas';
    }else{
        text_hora = ' hora';
    }

    if(minuto != 1){
        text_minuto = ' minutos';
    }else{
        text_minuto = ' minuto';
    }

    if(segundo != 1){
        text_segundo = ' segundos';
    }else{
        text_segundo = ' segundo';
    }

    document.querySelector('#horas').innerText = hora;
    document.querySelector('#minutos').innerText = minuto;
    document.querySelector('#segundos').innerText = segundo;

    document.querySelector('#horas_text').innerText = text_hora;
    document.querySelector('#minutos_text').innerText = text_minuto;
    document.querySelector('#segundos_text').innerText = text_segundo;

    if(hora >= 0 && hora < 12){
        img.src = './images/manha.webp';
        cumprimento.innerHTML = 'Bom dia!'
        body.style.background = 'url(./images/manha.webp)';

    }else if(hora >= 12 && hora < 18){
        img.src = './images/tarde.webp';
        cumprimento.innerHTML = 'Boa tarde!'
        body.style.background = 'url(./images/tarde.webp)';

    }else{
        img.src = './images/noite.webp';
        cumprimento.innerHTML = 'Boa noite!'
        body.style.background = 'url(./images/noite.webp)';
    }

    //RELOGIO ANALOGICO
    setRotation(hour, (360/12)  * hora);

    setRotation(minute, (360/60)  * minuto);

    setRotation(second, (360/60)  * segundo);
}

function setRotation(element, rotation){
    element.style.transform = `rotate(${rotation}deg)`
}

setInterval(carregar, 500);