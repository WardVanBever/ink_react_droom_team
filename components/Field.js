'use strict';
const React = require("react");
const { useRef, useEffect } = require("react");

const { render, measureElement, Text, Box } = require('ink');

const Field = () => {
	const ref = useRef();
	useEffect(() => {
		const {width, height} = measureElement(ref.current);
		// width = 100, height = 1
	}, []);

	return (
		<Box borderStyle="double" width={100} flexDirection="column">

			<Box>
				<Box borderStyle="single" ref={ref} width={5} height={3}>
				</Box>
				<Box borderStyle="single" ref={ref} width={5} height={3}>
					<Text> x </Text>
				</Box>
				<Box borderStyle="single" ref={ref} width={5} height={3}>
				</Box>
			</Box>
			<Box>
				<Box borderStyle="single" ref={ref} width={5} height={3}>
				</Box>
				<Box borderStyle="single" ref={ref} width={5} height={3}>
				</Box>
				<Box borderStyle="single" ref={ref} width={5} height={3}>
				</Box>
			</Box>
		</Box>
	);
};

module.exports = Field;
