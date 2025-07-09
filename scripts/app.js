function init() {

    const gridELm = document.querySelector('.grid')
    const scoreElm = document.querySelector('#Score-Display')
    const audioElem = document.querySelector('#quack')


    const cells = []
    const gridWidth = 10
    const numberCells = gridWidth * gridWidth

    let duckPosition = 3
    let score = 0
    let totalDucks = 0
    function addDuck() {
        cells[duckPosition].classList.add('duck')
        totalDucks++
    }


    function removeDuck() {

        cells[duckPosition].classList.remove('duck')

    }

    function endGame() {
        alert('Game Ended, score: ' + score)
        score = 0
        totalDucks = 0
    }

    function playGame() {

        setInterval(() => {
            if (totalDucks < 10) {
                removeDuck()
                duckPosition = Math.floor(Math.random() * numberCells)
                addDuck()
            } else {
                // console.log('game ended')
                // setTimeout(() => {
                //     alert('Game ended your score is' + score)
                // }, 2000)
            endGame()
            }
        }, 1000);

    }

    function handleClick() {

        console.log('Handle Click has run!')
        if (event.target.classList.contains('duck')) {
            audioElem.pause()
            audioElem.currentTime = 0
            score += 100000
            scoreElm.textContent = `Your score is ${score}!`
            audioElem.play()
            console.log(score)
        }
    }

    function createGrid() {
        // for every cell we require create a div
        // append this cell to our grid
        for (let i = 0; i < numberCells; i++) {
            const cell = document.createElement('div')
            // cell.classList.add('duck')
            cell.textContent = i
            cell.addEventListener('click', handleClick)
            cells.push(cell)
            gridELm.appendChild(cell);
        }

        console.log(cells)
    }
    createGrid()
    // addDuck()
    // removeDuck()
    playGame()
}

document.addEventListener('DOMContentLoaded', init)