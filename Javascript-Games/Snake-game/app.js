(() => {

    let canvas = document.getElementById("snake"),
        context = canvas.getContext("2d"),
        snake,
        snakeDirection,
        nextDirection = 1,
        snakeSpeed = 150,
        unit = { x: 0, y: 0 },
        score,
        playGround = document.getElementById("snake"),
        mainMenu = document.getElementById("menu"),
        newgame = document.getElementById("newgame"),
        scoreValue = document.getElementById("scoreValue");
    newgame.onclick = () => { newGame(); };
    window.onload = () => { showScreen("menu"); }

    let activeDot = (x, y) => {
        context.fillStyle = "#FFFFFF";
        context.fillRect(x * 10, y * 10, 10, 10);
    }

    let changeDirection = (key) => {
        key == 87 && snakeDirection != 2 ? nextDirection = 0 :
            key == 68 && snakeDirection != 3 ? nextDirection = 1 :
                key == 83 && snakeDirection != 0 ? nextDirection = 2 :
                    key == 65 && snakeDirection != 1 ? nextDirection = 3 : '';
    }

    let extendSnake = () => {
        unit.x = Math.floor(Math.random() * ((canvas.width / 10) - 1));
        unit.y = Math.floor(Math.random() * ((canvas.height / 10) - 1));

        for (let i = 0; i < snake.length; i++) {
            if (checkBlock(unit.x, unit.y, snake[i].x, snake[i].y)) {
                extendSnake();
            }
        }
    }

    let checkBlock = (snakeXposition, snakeYposition,
        currUnitXPosiiton, currUnitYPosiiton) => {
        return (snakeXposition == currUnitXPosiiton
            && snakeYposition == currUnitYPosiiton) ? true : false;
    }

    let mainLoop = () => {

        let rightLeft = snake[0].x;
        let upDown = snake[0].y;

        snakeDirection = nextDirection;
        snakeDirection === 0 ? upDown-- :
            snakeDirection === 1 ? rightLeft++ :
                snakeDirection === 2 ? upDown++ : rightLeft--;

        snake.pop();

        snake.unshift({ x: rightLeft, y: upDown });

        for (let i = 0, x = snake.length; i < x; i++) {
            if (snake[i].x < 0) {
                snake[i].x = snake[i].x + (canvas.width / 10);
            }
            if (snake[i].x == canvas.width / 10) {
                snake[i].x = snake[i].x - (canvas.width / 10);
            }
            if (snake[i].y < 0) {
                snake[i].y = snake[i].y + (canvas.height / 10);
            }
            if (snake[i].y == canvas.height / 10) {
                snake[i].y = snake[i].y - (canvas.height / 10);
            }
        }

        // Game over
        for (let i = 1; i < snake.length; i++) {
            if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
                showScreen(1);
                return;
            }
        }

        // Extend snake
        if (checkBlock(snake[0].x, snake[0].y, unit.x, unit.y)) {
            snake[snake.length] = {
                x: snake[0].x, y: snake[0].y
            };
            score += 1;
            scoreValue.innerHTML = score;
            extendSnake();
            activeDot(unit.x, unit.y);
        }

        context.beginPath();
        context.fillStyle = "green";
        context.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < snake.length; i++) {
            activeDot(snake[i].x, snake[i].y);
        }

        activeDot(unit.x, unit.y);
        setTimeout(mainLoop, snakeSpeed);
    }

    let newGame = () => {
        showScreen(0);
        playGround.focus();
        snake = [];

        for (let i = 4; i >= 0; i--) {
            snake.push({ x: i, y: 15 });
        }

        score = 0;
        extendSnake();

        canvas.onkeydown = (evt) => {
            changeDirection(evt.keyCode);
        }
        mainLoop();

    }

    let showScreen = (value) => {
        value === 0 ?
            (playGround.style.display = "block",
                mainMenu.style.display = "none") :
            (playGround.style.display = "none",
                mainMenu.style.display = "block")
    }
})();