const React = require('react');
const {useInput} = require('ink');

const UserInput = ({updateText}) =>
{

	const inputFuncs = [];
	const callFuncOnInput = (input, func) =>
	{
		inputFuncs.push({input, func});
	}

	useInput((input, key) => {
		//key.leftArrow
		inputFuncs.filter(check => check.input === input).forEach(inputFunc => inputFunc());
	});

	return (<></>);
}

module.exports = UserInput;
