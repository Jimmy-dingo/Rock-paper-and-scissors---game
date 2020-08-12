var possibilities = ['Rock', 'Paper', 'Scissors'];
var options = 0;
var user = Math.random();
var computer = Math.random();
var winner = 0;
console.log(computer);
console.log(user);
console.log('----------------------');

function comMeans(computer) {
  if (computer <= 0.33) {
    computer = possibilities[0];
  }
  else if (computer > 0.33 && computer <= 0.66) {
    computer = possibilities[1];
  }
  else if (computer > 0.66 && computer <= 0.99) {
    computer = possibilities[2];
  }
  return computer;
};

computer = comMeans(computer);
user = comMeans(user);

function play(options, user, computer) {
  options = ['Tie!', 'User wins!', 'Computer wins!'];
  var computerImg = document.querySelector('#computer-img');
  var userImg = document.querySelector('#user-img');
  var userResult = document.querySelector('.user-side p');
  var computerResult = document.querySelector('.computer-side p');
  var winnerResult = document.querySelector('.result');

  if (user === 'Rock' && computer === 'Rock') {
    winner == options[0];
    userResult.innerText = user;
    computerResult.innerText = computer;
    winnerResult.innerText = winner;
    console.log("Tie!");
  }
  else if (user === 'Paper' && computer === 'Paper') {
    winner = options[0];
    userImg.src = "assets/images/paper.png";
    computerImg.src = "assets/images/paper.png";
    userResult.innerText = user;
    computerResult.innerText = computer;
    winnerResult.innerText = winner;
    console.log("Tie!");
  }
  else if (user === 'Scissors' && computer === 'Scissors') {
    winner = options[0];
    userImg.src = "assets/images/scissors.png";
    computerImg.src = "assets/images/scissors.png";
    userResult.innerText = user;
    computerResult.innerText = computer;
    winnerResult.innerText = winner;
    console.log("Tie!");
  }
  else if (user === 'Paper' && computer === 'Rock') {
    winner = options[1];
    userImg.src = "assets/images/paper.png";
    userResult.innerText = user;
    computerResult.innerText = computer;
    winnerResult.innerText = winner;
    console.log("User wins!");
  }
  else if (user === 'Rock' && computer === 'Scissors') {
    winner = options[1];
    computerImg.src = "assets/images/scissors.png";
    userResult.innerText = user;
    computerResult.innerText = computer;
    winnerResult.innerText = winner;
    console.log("User wins!");
  }
  else if (user === 'Scissors' && computer === 'Rock') {
    winner = options[2];
    userImg.src = "assets/images/scissors.png";
    userResult.innerText = user;
    computerResult.innerText = computer;
    winnerResult.innerText = winner;
    console.log("Computer wins!");
  }
  else if (user === 'Rock' && computer === 'Paper') {
    winner = options[2];
    computerImg.src = "assets/images/paper.png";
    userResult.innerText = user;
    computerResult.innerText = computer;
    winnerResult.innerText = winner;
    console.log("Computer wins!");
  }
  else if (user === 'Paper' && computer === 'Scissors') {
    winner = options[2];
    userImg.src = "assets/images/paper.png";
    computerImg.src = "assets/images/scissors.png";
    userResult.innerText = user;
    computerResult.innerText = computer;
    winnerResult.innerText = winner;
    console.log("Computer wins!");
  }
  else if (user === 'Scissors' || computer === 'Paper') {
    winner = options[1];
    userImg.src = "assets/images/scissors.png";
    computerImg.src = "assets/images/paper.png";
    userResult.innerText = user;
    computerResult.innerText = computer;
    winnerResult.innerText = winner;
    console.log("User wins!");
  }
  return winner;
};

play(winner, user, computer);

var clickButton = document.querySelector('button');

function doItAgain() {
  if (clickButton) {
    location.reload();
  }
};

clickButton.addEventListener('click', doItAgain);