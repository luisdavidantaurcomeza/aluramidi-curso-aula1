/* function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();

}
function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play();

}
function tocaSomTim(){
    document.querySelector('#som_tecla_tim').play();

}
function tocaSomPuff(){
    document.querySelector('#som_tecla_puff').play();

}
function tocaSomSplash(){
    document.querySelector('#som_tecla_splash').play();

}
function tocaSomToim(){
    document.querySelector('#som_tecla_toim').play();

}
function tocaSomPsh(){
    document.querySelector('#som_tecla_psh').play();

}
function tocaSomTim(){
    document.querySelector('#som_tecla_tic').play();

}
function tocaSomTom(){
    document.querySelector('#som_tecla_tom').play();

}

document.querySelector('.tecla_pom').onclick = tocaSomPom;
document.querySelector('.tecla_pom').onclick = tocaSomClap;
document.querySelector('.tecla_pom').onclick = tocaSomTim;
document.querySelector('.tecla_pom').onclick = tocaSomPuff;
document.querySelector('.tecla_pom').onclick = tocaSomSplash;
document.querySelector('.tecla_pom').onclick = tocaSomToim;
document.querySelector('.tecla_pom').onclick = tocaSomPsh;
document.querySelector('.tecla_pom').onclick = tocaSomTim;
document.querySelector('.tecla_pom').onclick = tocaSomTom;

 
function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}

const listaDeTeclas =  document.querySelectorAll('.tecla');

listaDeTeclas [0].onclick = tocaSomPom;
listaDeTeclas [0].onclick = tocaSomClap;
listaDeTeclas [0].onclick = tocaSomTim;
listaDeTeclas [0].onclick = tocaSomPuff;
listaDeTeclas [0].onclick = tocaSomSplash;
listaDeTeclas [0].onclick = tocaSomPsh;
listaDeTeclas [0].onclick = tocaSomTim;
listaDeTeclas [0].onclick = tocaSomTom; */

// Pom ----------------------------------------
function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    if (elemento === null){
        console.log( 'elemento não encontrado');
    }
    if (elemento &&elemento.localName==='audio') {
            elemento.play();       

    } else {
        console.log ('elemento não encontrado ou seletor inválido! ')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//let contador = 0;

/* while (contador<listaDeTeclas.length){

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;
    console.log (idAudio);



    tecla.onclick = function(){
        tocaSom(idAudio)
    }
    contador = contador+1;
    console.log(contador);
}
 */


for (let contador=0; contador<listaDeTeclas.length; contador ++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio)
    }
    tecla.onkeydown = function(evento){
        //console.log(evento);
        if(evento.code === 'Space'||evento.code ==='Enter'){
        tecla.classList.add('ativa');
        } 
        
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
        
    }

}
