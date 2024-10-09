let coinFlip
let streak = 0

do {
    coinFlip = Math.round(Math.random())
    if (coinFlip === 0) {
        console.log('Heads')
        streak++;
    } else {
        console.log('Tails')
        console.log(`You got a streak of ${streak} Heads in a row.`)
        break
    }
} while (true);