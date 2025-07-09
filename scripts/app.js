function init(){

        const gridELm = document.querySelector('.grid')


    function createGrid(){
        // for every cell we require create a div
        // append this cell to our grid
        for (let i=0; i < 100; i++){
            const cell = document.createElement('div')
            cell.textContent = i
            gridELm.appendChild(cell);
    }
    }
    createGrid()


}

document.addEventListener('DOMContentLoaded', init)