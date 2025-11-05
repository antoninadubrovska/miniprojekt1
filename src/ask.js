/*
Usage:
import { ask } from './ask.js'
let answer = await ask("Hello, what's your name? ")
*/
import readline from 'node:readline'

// Denna funktion använder flera nya koncept: promise, async och objekt. Vi går igenom dem senare i kursen.
async function ask(query) {
	const rl = readline.createInterface({ input: process.stdin, output: process.stdout, tabSize: 4 });

	return new Promise((resolve) => rl.question(query, (answer) => {
		rl.close();
		resolve(answer);
	}));
}

export { ask }
