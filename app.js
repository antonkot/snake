// Constants
const APP_SIZE = 300
const CELL_SIZE = 10
const CELL_COUNT = APP_SIZE / CELL_SIZE

const canvas = document.getElementById('app')
const ctx = canvas.getContext('2d')

// Variables
let grid = []

// Returns empty grid
function getEmptyGrid() {
    let temp = []
    for (var x = 0; x < CELL_COUNT - 1; x++) {
        temp.push([])
        for (var y = 0; y < CELL_COUNT - 1; y++) {
            if (
                x == 0 || y == 0 ||
                x == CELL_COUNT - 1 || y == CELL_COUNT - 1
            ) {
                temp[x].push(-1)
            } else {
                temp[x].push(0)
            }
        }
    }
    return temp
}

grid = getEmptyGrid()
console.table(grid)