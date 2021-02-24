#!/usr/bin/env node
'use strict';
const React = require('react');
const importJsx = require('import-jsx');
const {render} = require('ink');
const meow = require('meow');

const ui = importJsx('./ui');

const cli = meow(`
	Usage
	  $ ink_react_droom_team

	Options
		--name  Your name

	Examples
	  $ ink_react_droom_team --name=Jane
	  Hello, Jane
`);

render(React.createElement(ui, cli.flags));
