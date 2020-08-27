/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */

const express = require('express');
const path = require('path');

const PORT = 8200;
const app = express();

let dir = path.resolve(__dirname, 'dist');
if (process.argv.length >= 3) dir = process.argv[2];

app.use(
	express.static(dir, {
		maxAge: '365d'
	})
);

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();

	app.options('*', (req, res) => {
		res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
		res.send();
	});
});

app.listen(PORT);

console.log(`Listening on: http://localhost:${PORT}`);
