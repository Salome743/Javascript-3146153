const video = document.querySelector("#video");
const playvideo = document.querySelector("#play-video");
const stopvideo = document.querySelector("#stop-video");
const playstopimg1 = document.querySelector("#play-stop-img1");
const playstopimg2 = document.querySelector("#play-stop-img2");
const audio1 = document.querySelector("#audio-1");
const audio2 = document.querySelector("#audio-2");

/* console.log(video);
console.log(playvideo);
console.log(stopvideo);
console.log(playstopimg1);
console.log(playstopimg2); */



//Función para reproducir video
function reproducirVideo () {
    video.play()
}

//Evento de click con "addEventlistener" que ejecuta reproducirVideo//...

playvideo.addEventListener( 'click' , reproducirVideo )

//Fución para pausar video
function pausarVideo () {
    video.pause()

}
//Evento de click con "addEventlistener" que ejecuta pausarVideo//...

stopvideo.addEventListener( 'click' , pausarVideo )


//toggleAudioUno
function toggleAudioUno() {

    if ( audio1.paused ) {
    audio1.play()
    playstopimg1.textContent = " stop "
  }else{
    audio1.pause()
    playstopimg1.textContent = " play "
}
}
playstopimg1.addEventListener( 'click' , toggleAudioUno )


function toggleAudioDos() {

    if ( audio2.paused ) {
    audio2.play()
    playstopimg2.textContent = " stop "
  }else{
    audio2.pause()
    playstopimg2.textContent = " play "
}
}
playstopimg2.addEventListener( 'click' , toggleAudioDos )