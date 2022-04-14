const ligar = document.getElementById ('ligar');
    const desligar = document.getElementById('desligar');
    const lamp = document.getElementById('lamp');

    function lampOn(){

        if(!isBroken()){
        lamp.src = 'https://i.stack.imgur.com/ybxlO.jpg';
        }
    }

    function isBroken(){
        return lamp.src.indexOf ('MRjsF') >-1;

    }

    function lampOff(){
        if(!isBroken()){
        
        lamp.src = 'https://sobrinhosergio.github.io/desafios-javascript/lampada/imagens/desligada.jpg';
        }
    }

    function lampBroken(){
        lamp.src = 'https://i.stack.imgur.com/MRjsF.jpg';
    }

    function tibiaDead(){
        lamp.src = 'https://http2.mlstatic.com/D_NQ_NP_921285-MLB43390866287_092020-O.jpg';
    }


    ligar.addEventListener('click', lampOn);
    desligar.addEventListener('click', lampOff);
    lamp.addEventListener('mouseover', lampOn);
    lamp.addEventListener('mouseleave', lampOff);
    lamp.addEventListener('dblclick', lampBroken);
    


