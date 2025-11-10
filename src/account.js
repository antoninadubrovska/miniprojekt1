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

	if ( isNaN(state.interestRate)) {
		console.log('Ogiltig räntesats. Räntesats är mellan 0 och 8 % ')
		return
	  }
	const oldBalance = state.balance
	state.balance *= state.interestRate

	const added = state.balance - oldBalance
	console.log(`Ränta tillagd: ${added.toFixed(2)} kr.`)
	showBalance()
}

// async function setInterest...

function setInterest() {
	console.log(`Nuvarande räntesats: ${((state.interestRate - 1) * 100).toFixed(2)}%`)
	// const input = (prompt('Ange ny räntesats i procent: '))
	// const newRate = Number(input)

	// if (input.trim() === '' || newRate < 0 || newRate > 8) {
	// 	console.log('Räntesats är mellan 0 och 8 % ')
	// 	return
	// }

	const newRate = Number(prompt('Ange ny räntesats i procent: '))

	if (isNaN(newRate) || newRate < 0 || newRate > 8) {
		console.log('Ogiltig räntesats. Räntesats är mellan 0 och 8 % ')
		return
	}

	state.interestRate = 1 + newRate / 100
	console.log(`Ny räntesats satt till ${newRate.toFixed(2)}%`)
	// console.log('----------------------------------------\n')
}

// task 1 ( option 6 from the menu ) - rename account
function renameAccount() {
	console.log(`Nuvarande kontonamn: ${state.accountName}`)
	const newName = prompt('Ange nytt kontonamn: ')
	state.accountName = newName
	console.log(`Kontonamnet är ändrad till: ${state.accountName}`)
}


export { showBalance, renameAccount, deposit, withdraw, calculateInterest, setInterest }
