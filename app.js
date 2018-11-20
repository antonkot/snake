// Constants
const APP_SIZE = 300
const CELL_SIZE = 10
const CELL_COUNT = APP_SIZE / CELL_SIZE

const canvas = document.getElementById('app')
canvas.width = APP_SIZE
canvas.height = APP_SIZE
const ctx = canvas.getContext('2d')

// Variables
let grid = []
let dir = {
    x: 1,
    y: 0
}
let snake = [{
        x: 15,
        y: 15
    },
    {
        x: 14,
        y: 15
    },
    {
        x: 13,
        y: 15
    }
]

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

// Draw grid on canvas
function draw() {
    for (var x = 0; x < CELL_COUNT; x++) {
        for (var y = 0; y < CELL_COUNT; y++) {
            switch (grid[x][y]) {
                case 0: // Background
                    ctx.fillStyle = 'black'
                    break;
                case -1: // Walls
                    ctx.fillStyle = 'grey'
                    break;
                case 1: // Snake
                    ctx.fillStyle = 'white'
                    break;
            }
            ctx.fillRect(
                x * CELL_SIZE, y * CELL_SIZE,
                CELL_SIZE, CELL_SIZE
            )
        }
    }
}

// Combine grid and snake
function combine() {
    for (var i = 0; i < snake.length; i++) {
        grid[snake[i].x][snake[i].y] = 1
    }
}

grid = getEmptyGrid()
combine()
draw()