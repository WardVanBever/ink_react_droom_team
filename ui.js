'use strict';
const React = require('react');
const {useState} = require('react');
const {Text} = require('ink');
const importJsx = require('import-jsx');
const UserInput = importJsx('./components/UserInput.js');

const App = ({name = 'Stranger'}) => {

	const [renderText, setrenderText] = useState('empty');

	return (
	<Text>
		{renderText}

		<UserInput updateText={setrenderText}/>
	</Text>);
};

module.exports = App;
