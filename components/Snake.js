//import { Box, Text } from 'ink';
const React = require('react');
const { Box, Text } = require('ink');

const Snake = ({snake, windowSize}) => {
	let screenData = [];
	for (let i = 0; i < windowSize.h; i++) {
		let row = [];
		for (let j = 0; j < windowSize.w; j++) {
			let checked = false;
			snake.forEach(item => {
				if (j === item[0] && i === item[1]) checked = true;
			});
			row.push(checked);
		}
		console.log(row);
		screenData.push(row);
	}

	console.log(snake);

	return (
		<Box flexDirection="column">
			{screenData.map((row, rowIndex) => (
				<Box key={rowIndex} flexDirection="row" height={1} width={windowSize.w}>
					{row.forEach((box, boxIndex) => (
						<Box key={boxIndex} backgroundColor={box ? `black` : `white`} color={box ? `black` : `white`} height={1} width={1}>
							<Text>i</Text>
						</Box>
					))}
				</Box>
			))}
		</Box>
	);
};

module.exports = Snake;
//render(<Snake />);
