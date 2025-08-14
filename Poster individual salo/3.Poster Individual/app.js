const todos = document.querySelectorAll('.fantasma');
const pacman = document.querySelector('.pacman');

todos.forEach(fantasma => {
    fantasma.addEventListener('click', () => {
        if (
            fantasma.classList.contains('pacman')) {
            fantasma.style.animation = 'pacmanBoca 0.3s steps(2) infinite, mover 5s linear forwards infinite ';
        } else {
            fantasma.style.animation = 'mover 5s linear forwards infinite';
        
        }
    });
});

const fantasmas = document.querySelectorAll('.fantasma');
const contadorFantasmas = document.querySelector("#contador-fantasmas")

let totalFantasmas = 0 


console.log(fantasmas,contadorFantasmas,)


fantasmas.forEach( function(fantasma){
    /* console.log(fantasma) */
    fantasma.addEventListener( 'click', function () {
        fantasma.classList.add( 'saltar' )
        totalFantasmas++
        contadorFantasmas.textContent = totalFantasmas
} )
 
} )

