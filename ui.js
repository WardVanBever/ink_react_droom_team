'use strict';
const React = require('react');
const {Text} = require('ink');
const importJsx = require("import-jsx");
const { useState } = require('react');
const Snake = importJsx("./components/Snake");

const App = ({name = 'Stranger'}) => {
	const [screen, setScreen] = useState({w: 40, h: 30});
	const [pos, setPos] = useState({x: 0, y: 0});
	const [size, setSize] = useState(5);
	const [snake, setSnake] = useState([]);

	return (
	<>
		<Text>
			Hello, <Text color="green">{name}</Text>
		</Text>
		<Snake pos={pos} size={size} screen={screen} />
	</>
	);
};


module.exports = App;
