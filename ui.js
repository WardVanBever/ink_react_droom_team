'use strict';
const React = require('react');
const {Text} = require('ink');
const importJsx = require("import-jsx");
const Field = importJsx("./components/Field.js");
const Test = importJsx("./components/Test.js");

const App = ({name = 'Stranger'}) => (
	<Field></Field>
);

module.exports = App;
