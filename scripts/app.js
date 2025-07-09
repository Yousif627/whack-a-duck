function init() {

    const gridELm = document.querySelector('.grid')

    const cells = []
    const gridWidth = 10
    const numberCells = gridWidth * gridWidth

    let duckPosition = 3

    function addDuck() {
        cells[duckPosition].classList.add('duck')
    }


    function removeDuck() {

        cells[duckPosition].classList.remove('duck')

    }

    function playGame() {

        setInterval(() => {

            removeDuck()
            duckPosition = Math.floor(Math.random() * numberCells)
            addDuck()
        }, 0.900);

    }


    function createGrid() {
        // for every cell we require create a div
        // append this cell to our grid
        for (let i = 0; i < numberCells; i++) {
            const cell = document.createElement('div')
            // cell.classList.add('duck')
            cell.textContent = i
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