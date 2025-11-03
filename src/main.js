import { ask } from "./ask.js"
import { isExitCommand, printIntroduction, printMenu } from "./utils.js"


async function mainLoop() {
	printIntroduction()

	let choice = ''
	while( !isExitCommand(choice) ) {
		printMenu()

		choice = await ask('? ')
	}
}


mainLoop()
