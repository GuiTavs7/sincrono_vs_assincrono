// 1) SÍNCRONO - CÓDIGO SEGUE UM FLUXO LINEAR DE EXECUÇÃO

function colocarAguaPraFerver(){
    console.log("Colocar água pra ferver");
    console.log("Água ferveu!");
}

function prepararPraPassarOCafe(){
    console.log("Pegar o pó de café");
    console.log("Pegar o filtro de café");
    console.log("Colocar o café no filtro");
    console.log("Colocar o filtro em cima da xícara");
}

function passarOCafe(){
    console.log("Passando o café");
}

colocarAguaPraFerver();
prepararPraPassarOCafe(); // Se a função de ferver a água levar "x" minutos, esta só será executada quando a primeira estiver concluída
passarOCafe();

// 2) ASSÍNCRONO - MANEIRA MAIS IDEAL - DELEGAR A FERVURA DA ÁGUA PARA O FOGÃO EM SI - GANHAR TEMPO

function aguaFervendoAssincronamente(){
    console.log("Colocar água pra ferver");

    setTimeout(() => {
        console.log("Água ferveu!");
        passarOCafe();
    }, 5000);
}

aguaFervendoAssincronamente();
prepararPraPassarOCafe();