import { state } from "./data.js"


function showBalance() {
	console.log(`Du har ${state.balance} kr på kontot.`)
}


// TODO: lägg till funktioner för återstående menyalternativ. Förslag:
// async function deposit(money) {}
// async function withdraw...
// async function calculateInterest...
// async function setInterest...


export { showBalance }
