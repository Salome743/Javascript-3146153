const monedas = document.querySelectorAll(".coin")
const corazones = document.querySelectorAll(".corazon")
const contadorMonedas = document.querySelector("#contador-monedas")
const contadorCorazones = document.querySelector("#contador-corazones")
const audiomonedas = document.querySelector("#audio-monedas");
const audiocorazones = document.querySelector("#audio-corazon");
const audio1 = document.querySelector("#audio-1");
const playstop = document.querySelector("#play-stop");
let totalMonedas = 0 
let totalCorazones = 0 


console.log(monedas,corazones,contadorMonedas,contadorCorazones)


monedas.forEach( function(moneda){
    /* console.log(moneda) */
    moneda.addEventListener( 'click', function () {
        moneda.classList.add( 'saltar' )
        totalMonedas++
        contadorMonedas.textContent = totalMonedas

         if ( audiomonedas.paused ) {
         audiomonedas.play()
   
         }else{
         audiomonedas.pause()
    
}
} )
 
} )


corazones.forEach ( function ( corazon ){
    
    corazon.addEventListener( 'click', function () {
        corazon.classList.add( 'saltar' )
        totalCorazones++
       contadorCorazones.textContent = totalCorazones
        const audioCorazon = document.querySelector("#audio-corazon");
        if ( audioCorazon.paused ) {
            audioCorazon.play()
        }else{
            audioCorazon.pause()
        }
} )
} )

//toggleAudioUno
function toggleAudioUno() {

    if ( audio1.paused ) {
    audio1.play()
    playstop.textContent = " stop "
  }else{
    audio1.pause()
    playstop.textContent = " play "
}
}
playstop.addEventListener( 'click' , toggleAudioUno )
