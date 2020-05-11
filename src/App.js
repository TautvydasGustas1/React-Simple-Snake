import React, { useState, useEffect } from 'react';
import './App.css';
import Snake from './Snake';
import Food from './Food';

function App() {
    const getRandomFoodCord = () => {
        let top = 0;
        let left = 0;
        let min = 1;
        let max = 99;

        top = Math.floor((Math.random() * max + min) / 2) * 2;
        left = Math.floor((Math.random() * max + min) / 2) * 2;

        return [top, left];
    };

    const InitObject = {
        snakeDots: [
            [0, 0],
            [0, 2],
        ],
        food: getRandomFoodCord(),
        direction: 'RIGHT',
        speed: 150,
    };

    const [states, setStates] = useState(InitObject);

    const moveSnake = () => {
        let dots = [...states.snakeDots];
        let head = dots[dots.length - 1];
        switch (states.direction) {
            case 'UP':
                head = [head[0] - 2, head[1]];
                break;
            case 'DOWN':
                head = [head[0] + 2, head[1]];
                break;
            case 'LEFT':
                head = [head[0], head[1] - 2];
                break;
            case 'RIGHT':
                head = [head[0], head[1] + 2];
                break;
            default:
                break;
        }
        dots.push(head);
        dots.shift();
        setStates((prevState) => ({
            ...prevState,
            snakeDots: dots,
        }));
    };

    const checkIfHittedItself = (snake, head) => {
        snake.pop();
        snake.forEach((dot) => {
            if (head[0] === dot[0] && head[1] === dot[1]) {
                gameOver();
            }
        });
    };

    const gameOver = () => {
        alert(`You lost your score ${states.snakeDots.length}`);
        setStates(InitObject);
    };

    const checkIfOutOFBounds = (head) => {
        if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
            gameOver();
        }
    };

    const inreaseSpeed = () => {
        if (states.speed >= 10) {
            states.speed -= 5;
        }
    };

    const checkForFood = (head) => {
        if (head[0] === states.food[0] && head[1] === states.food[1]) {
            addSnakeDot();
            states.food = getRandomFoodCord();
            inreaseSpeed();
        }
    };

    const addSnakeDot = () => {
        let snake = [...states.snakeDots];
        snake.unshift([]);
        setStates((prevState) => ({
            ...prevState,
            snakeDots: snake,
        }));
    };

    //ComponentDidMount
    useEffect(() => {
        window.addEventListener('keyup', onKeyDown);

        return () => {
            window.removeEventListener('keyup', onKeyDown);
        };
    }, []);

    //For movement
    useEffect(() => {
        //SetMoveInterval
        const interval = setTimeout(() => {
            moveSnake();
        }, states.speed);

        let newSnake = [...states.snakeDots];
        let head = newSnake[newSnake.length - 1];

        //Check for loose conditions
        checkIfOutOFBounds(head);
        checkIfHittedItself(newSnake, head);

        // //Check for food
        checkForFood(head);
        return () => clearTimeout(interval);
    });

    const onKeyDown = (e) => {
        switch (e.code) {
            case 'ArrowUp':
            case 'KeyW':
                setStates((prevState) => ({
                    ...prevState,
                    direction: 'UP',
                }));
                break;
            case 'ArrowDown':
            case 'KeyS':
                setStates((prevState) => ({
                    ...prevState,
                    direction: 'DOWN',
                }));
                break;
            case 'ArrowLeft':
            case 'KeyA':
                setStates((prevState) => ({
                    ...prevState,
                    direction: 'LEFT',
                }));
                break;
            case 'ArrowRight':
            case 'KeyD':
                setStates((prevState) => ({
                    ...prevState,
                    direction: 'RIGHT',
                }));
                break;
            default:
                break;
        }
    };

    return (
        <div className='App'>
            <div className='game-container'>
                <Snake snakeDots={states.snakeDots} />
                <Food food={states.food} />
            </div>
        </div>
    );
}

export default App;
