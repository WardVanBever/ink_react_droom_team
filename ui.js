'use strict';
const React = require('react');
const { Text, useInput } = require('ink');
const importJsx = require("import-jsx");
const { useState } = require('react');
const Snake = importJsx("./components/Snake");

const App = ({name = 'Stranger'}) => {
	const [pos, setPos] = useState({x: 0, y: 0});
	const [direction, setDirection] = useState(`right`);
	const [windowSize, setWindowSize] = useState({w: 20, h: 10});
	const [snake, setSnake] = useState([[1,1], [1,2], [1,3], [2,3], [2,4]]);

	useInput((input, key) => {
		switch (input)
		{
			case key.leftArrow:
				setDirection(`left`);
				break;
			case key.rightArrow:
				setDirection(`right`);
				break;
			case key.upArrow:
				setDirection(`up`);
				break;
			case key.downArrow:
				setDirection(`down`);
				break;
		}
	});

	const updatePos = () => {
		const tmpPos = {...pos};
		switch (direction)
		{
			case `left`:
				setPos({x: tmpPos.x - 1, y: tmpPos.y});
				break;
			case `right`:
				setPos({x: tmpPos.x + 1, y: tmpPos.y});
				break;
			case `up`:
				setPos({x: tmpPos.x, y: tmpPos.y - 1});
				break;
			case `down`:
				setPos({x: tmpPos.x, y: tmpPos.y + 1});
				break;
		}
	};

	const updateSnake = () => {
		const tmpSnake = [...snake];
		tmpSnake.unshift([pos.x, pos.y]);
		tmpSnake.splice(snake.length - 1, 1);
		setSnake(tmpSnake);
	};

	const start = () => {
		setTimeout(() => {
			updatePos();
			updateSnake();
		}, 1000);
	}

	start();

	return (
	<>
		<Snake snake={snake} windowSize={windowSize} />
	</>
	);
};


module.exports = App;
