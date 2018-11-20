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
    let result = []
    for (var x = 0; x < CELL_COUNT; x++) {
        result.push([])
        for (var y = 0; y < CELL_COUNT; y++) {
            if (
                x == 0 ||
                y == 0 ||
                x == CELL_COUNT - 1 ||
                y == CELL_COUNT - 1
            ) {
                result[x].push(-1)
            } else {
                result[x].push(0)
            }
        }
    }
    return result
}

grid = getEmptyGrid()
console.table(grid)