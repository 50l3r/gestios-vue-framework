/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */

const shell = require('shelljs');
const figlet = require('figlet');
const chalk = require('chalk');
const pkg = require('./package.json');
const project = require('./src/config/settings.js');

figlet(`${project.name} ${pkg.version}`, (fErr, text) => {
	console.log(chalk.blue(text));

	// const path = `${process.cwd()}/src/@apps/src/${project}`;

	const express = shell.exec('node express.js', { async: true, silent: true });
	express.stderr.on('data', (err) => {
		console.log(chalk.red('\n\n***********************\nEXPRESS MICRO SERVER\n***********************'));
		console.log(chalk.red('Ocurrió un error al iniciar el microserver'));
		console.error(err.trim());
	});

	express.stdout.on('data', (data) => {
		console.log(chalk.yellow('\n\n***********************\nEXPRESS MICRO SERVER\n***********************'));
		console.log(data.trim());
	});

	const custom = shell.exec('npm run build:watch', { async: true, silent: true });
	custom.stdout.on('data', (data) => {
		data = data.trim();
		if (data) {
			console.log(chalk.blue(`\n\n***********************\nPROYECTO: ${chalk.green(project.name.toUpperCase())}\n***********************`));
			console.log(data);
		}
	});
});
