import { state } from "./data.js"

import promptSync from "prompt-sync"
const prompt = promptSync({sigint: true}) // -- enables prompt()


function showBalance() {
	console.log(`Du har ${state.balance} kr på kontot.`)
}


// TODO: lägg till funktioner för återstående menyalternativ. Förslag:

// async function deposit(money) {}
// 2
function deposit() {
	const amount = Number(prompt('Hur mycket vill du sätta in? '))
	if (amount > 0)
		state.balance += amount
	console.log(`Du har satt in ${amount} kr.`)
	showBalance()
}

// async function withdraw...
// 3
function withdraw() {
	const amount = Number(prompt('Hur mycket vill du ta ut? '))

	if (amount > state.balance) {
		console.log('Du har inte tillräckligt med pengar :( ')
		//return
	}

	//else {}

	state.balance -= amount
	console.log(`Du tog ut ${amount} kr.`)
	showBalance()
}

// async function calculateInterest...
// 4
function calculateInterest() {
	const oldBalance = state.balance
	state.balance *= state.interestRate

	const added = state.balance - oldBalance
	console.log(`Ränta tillagd: ${added.toFixed(2)} kr.`)
	showBalance()
}

// async function setInterest...

// task 1 ( option 6 from the menu ) - rename account
function renameAccount() {
	console.log(`Nuvarande kontonamn: ${state.accountName}`)
	const newName = prompt('Ange nytt kontonamn: ')
	state.accountName = newName
	console.log(`Kontonamnet är ändrad till: ${state.accountName}`)
}


export { showBalance, renameAccount, deposit, withdraw, calculateInterest }
