'use strict';
const React = require('react');
const {Text} = require('ink');
const importJsx = require("import-jsx");
const { useState } = require('react');
const Snake = importJsx("./components/Snake");

const App = ({name = 'Stranger'}) => {
	const [windowSize, setWindowSize] = useState({w: 20, h: 10});
	const [snake, setSnake] = useState([[1,1], [1,2], [1,3], [2,3], [2,4]]);

	return (
	<>
		<Snake snake={snake} windowSize={windowSize} />
	</>
	);
};


module.exports = App;
