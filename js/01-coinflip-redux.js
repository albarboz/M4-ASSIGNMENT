let coinFlip
let timesExecuted = prompt('How many times would you like to flip the coin?')
for ( let i = 0; i < timesExecuted; i++) {
    coinFlip = Math.round(Math.random())
    if (coinFlip === 0) {
        console.log('Head')
    } else {
        console.log('Tails')
    }
}