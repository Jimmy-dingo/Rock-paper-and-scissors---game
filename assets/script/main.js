// Definitions

var possibilities = ['Rock', 'Paper', 'Scissors'];
var options = ['Tie!', 'User wins!', 'Computer wins!'];
var user = Math.random();
var computer = Math.random();
var winner = 0;
console.log(computer);
console.log(user);
console.log('----------------------');

// 1. Computer and User choice meaning

function comMeans(computer) {
    if (computer <= 0.33) {
        computer = possibilities[0];
    }
    else if(computer >= 0.33 && computer <= 0.66){
        computer = possibilities[1];
    }
    else if(computer >= 0.66 && computer <= 0.99){
        computer = possibilities[2];
    }
    return computer;
}

console.log('Computer choice: ' + comMeans(computer));

console.log('User choice: ' + comMeans(user)); // here i reused the same function for the value of user

// 2.Function play

computer = comMeans(computer);
user = comMeans(user);

function play(options, user, computer) {
    if (user === 'Rock' && computer === 'Rock'){
        winner = options[0];
        console.log("Tie!");
    }
    else if (user === 'Paper' && computer === 'Paper'){
        winner = options[0];
        console.log("Tie!");
    }
    else if (user === 'Scissors' && computer === 'Scissors'){
        winner = options[0];
        console.log("Tie!");
    }
    else if (user === 'Paper' && computer === 'Rock'){
        winner = options[1];
        console.log("User wins!");
    }
    else if (user === 'Rock' && computer === 'Scissors'){
        winner = options[1];
        console.log("User wins!");
    }
    else if (user === 'Scissors' && computer === 'Rock'){
        winner = options[2];
        console.log("Computer wins!");
    }
    else if (user === 'Rock' && computer === 'Paper'){
        winner = options[2];
        console.log("Computer wins!");
    }
    else if (user === 'Paper' && computer === 'Scissors'){
        winner = options[2];
        console.log("Computer wins!");
    }
    else if(user === 'Scissors' || computer === 'Paper'){
        winner = options[1];
        console.log("User wins!");
    }
    return winner;
}

play(winner, user, computer);
