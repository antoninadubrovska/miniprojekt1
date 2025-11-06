import { state } from "./data.js"

import promptSync from "prompt-sync"
const prompt = promptSync({sigint: true}) // -- enables prompt()


function showBalance() {
	console.log(`Du har ${state.balance} kr på kontot.`)
}


// TODO: lägg till funktioner för återstående menyalternativ. Förslag:
// async function deposit(money) {}
// async function withdraw...
// async function calculateInterest...
// async function setInterest...

// task 1 ( option 6 from the menu ) - rename account
function renameAccount() {
	console.log(`Nuvarande kontonamn: ${state.accountName}`)
	const newName = prompt('Ange nytt kontonamn: ')
	state.accountName = newName
	console.log(`Kontonamnet är ändrt till: ${state.accountName}`)
}


export { showBalance, renameAccount }
