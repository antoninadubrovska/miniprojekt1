function printIntroduction() {
	// TODO
	console.log(`** JS Bank **
Ett JavaScript-träningsprojekt
`)
}

function separator() {
	console.log('-------------------------------------')
}
function printMenu() {
	separator()
	console.log(`1. Visa saldo
2. Sätt in
3. Ta ut
4. Lägg på sparränta
5. Sätt räntesats
0. Avsluta `)
}

function isExitCommand(input) {
	const commands = ['0', 'q', 'quit', 'exit', 'x', 'bye', 'avsluta']
	for( let i=0; i<commands.length; i++ ) {
		if( input.toLowerCase() === commands[i] ) {
			return true
		}
	}
	return false

	// Kortare, mer avancerad version
	// return ['q', 'quit', 'exit', 'x', 'bye', 'avsluta'].includes(input.toLowerCase())
}

export { printIntroduction, printMenu, isExitCommand, separator }
