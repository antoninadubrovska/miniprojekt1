/*
Denna fil ska du köra för att starta programmet. Gå till projektets rotmapp och skriv i terminalen:
node src/main.js
- eller -
npm run start

Håll utkik efter kommentarer med texten "TODO" i filerna.
*/
import { showBalance, renameAccount, deposit, withdraw, calculateInterest, setInterest  } from "./account.js"
import { ask } from "./ask.js"
import { isExitCommand, printIntroduction, printMenu } from "./utils.js"


async function mainLoop() {
	printIntroduction()

	let choice = ''
	while( !isExitCommand(choice) ) {
		printMenu()

		choice = await ask('? ')
		console.log('')  // gör en nyrad

		if( choice === '1' ) {
			showBalance()
		}

		else if( choice === '2' ) {
			// TODO: insättning
			deposit()
		}
		else if( choice === '3' ) {
			// TODO: ta ut
			withdraw()
		}
		else if( choice === '4' ) {
			// TODO: Lägg på sparränta
			calculateInterest()
		}
		else if( choice === '5' ) {
			// TODO: Lägg på sparränta
			setInterest()
		}
			// TODO: lägg till fler alternativ här...
			else if (choice === "6") {
				renameAccount()
			}
		else {
			console.log('Välj ett alternativ ur menyn - skriv en siffra!')
		}
	}
}


// Starta appen!
mainLoop()
