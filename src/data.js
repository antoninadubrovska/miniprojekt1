/*
Appens data lägger vi här, så att alla filer kan få tillgång till den. "state" är alltså en global variabel.
*/

const state = {
	accountName: 'My account',
	balance: 0,
	interestRate: 1.05
}

// TODO: låt state innehålla en lista med konto-objekt, för möjlighet att skapa flera konton och byta mellan dem

export { state }
