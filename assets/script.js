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


    //costruiamo la funzione per lo Start e il Restart del gioco
    function startGame() {
        currentSnake.forEach(index => squares[index].classList.remove('snake')) //prendiamo in considerazione "Each index del currentSnake Array", e 'rimuoviamo la classe snake da ogni index a parte quelli del currentSnake array'
        squares[appleIndex].classList .remove('apple')  
        clearInterval(interval)
        score = 0
        //randomApple(), stiamo resettando tutto in questa funzione
        direction = 1
        scoreDisplay.innerText = score
        intervalTime = 1000
        currentSnake = [2,1,0]
        currentIndex = 0
        currentSnake.forEach(index => squares [index].classList.add('snake'))
        interval = setInterval(moveOutComes, intervalTime)
     }
     
     // funzione che si occupa di tutti i movimenti del serpente
     function moveOutComes() {

    // parte che si occupa del serpente quando colpisce il muro o se stesso
    if (
        (currentSnake[0] + width >= (width * width) && direction === width ) || //if snake hits bottom
        (currentSnake[0] % width === width -1 && direction === 1) || //if snake hits right wall
        (currentSnake[0] % width === 0 && direction === -1) || //if snake hits left wall
        (currentSnake[0] - width < 0 && direction === -width) || //if snake hits the top
        squares[currentSnake[0] + direction].classList.contains('snake') //if snake goes into itself
    ) {
        return clearInterval(interval) // this will clear interval if any of the above happpens
        
    }


     }



    /* assegnamo funzioni alle frecce della tastiera,ogni tasto della tastiera ha un suo 'KEYCODE'.
    Assegnandogli le funzioni decidiamo cosa quel tasto debba fare*/

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
    document.addEventListener('keyup', control) // abbiamo costruito un EventListener che diche : 'ogni volta che una delle frecce viene schiacciata, esegui la funzione control'





})