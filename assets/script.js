document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div') //chiamiamo squares le unita' di <div></div> all'interneo del <div class='grid'></div>
    const scoreDisplay = querySelector('span')
    const startBtn = document.querySelector('.start')
    
    
    const width = 10
    let currentIndex = 0 //partiamo sempre da '0' quando ci sono Arrays di mezzo perche' il computer comincia a contare da 0, la prima posizione dell'elemento dell'Array
    let appleIndex = 0 // questi due 'let' equivalgono al primo div dentro la grid
    let currentSnake = [2,1,0] // il div nella grid uguale a 2 e' la testa del serpente, quello per 0 e' la coda, gli 1 saranno le parti del corpo

    let direction = 1
    let score = 0
    let speed = 0.7
    let intervalTime = 0
    let interval = 0

    // assegnamo funzioni alle frecce della tastiera,ogni tasto della tastiera ha un suo 'KEYCODE'.
    //Assegnandogli le funzioni decidiamo cosa quel tasto debba fare

    function control(e) {
        squares[currentIndex].classList.remove('snake') // rimuoviamo le classi .snake da tutti gli squares

        if(e.keyCode === 39) {
            direction = 1 //stiamo dicendo : 'if we press the right arrow the snake goes right'
        } else if (e.keyCode === 38) {
            direction = -width //stiamo dicendo : 'if we press the up arrow, the snake goes up'. 
        } else if (e.keyCode === 37) {
            direction = -1 // 'if we press left. snake goes left'
        }else if (e.keyCode === 40) {
            direction = +width // 'if we press down the snake goes down'
        }
    }


})