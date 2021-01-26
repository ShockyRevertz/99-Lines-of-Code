let friends = ['AnnMarie', 'Blake', 'Paul', 'Paris', 'Alan']

for(let i = 0; i < friends.length; i++) {
    console.log(friends[i].toUpperCase() + ':')
    for (let x = 99; x >= 0; x--) {
        if (x > 1) {
            console.log(x + ' lines of code in the file, ' + x + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + x + ' lines of code in the file' )
        } if (x === 1) {
            console.log(x + ' line of code in the file, ' + x + ' line of code; ' + friends[i] + ' strikes one out, clears it all out, ' + x + ' line of code in the file' )
        }
    }
    
}