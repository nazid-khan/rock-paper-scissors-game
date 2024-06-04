
let msg = document.getElementById("msg");

function playGame(playerMove) {
    const computerMove = pickComputerMove();

      let result = '';
      
      if(playerMove === 'rock'){
        if(computerMove === 'rock'){
          result = 'tie';
          msg.style.backgroundColor = "lavender";
          msg.style.color = "black";
        }else if(computerMove === 'paper'){
          result = 'you lose';
          msg.style.backgroundColor = "red";
          msg.style.color = "white";
        }else if(computerMove === 'scissors'){
          result = 'you win';
          msg.style.backgroundColor = "lightgreen";
          msg.style.color = "black";
        }
      }else if(playerMove === 'paper'){
        if(computerMove === 'rock'){
          result = 'you win';
          msg.style.backgroundColor = "lightgreen";
          msg.style.color = "black";
        }else if(computerMove === 'paper'){
          result = 'tie';
          msg.style.backgroundColor = "lavender";
          msg.style.color = "black";
        }else if(computerMove === 'scissors'){
          result = 'you lose';
          msg.style.backgroundColor = "red";
          msg.style.color = "white";
        }
      }else if(playerMove === 'scissor'){
        if(computerMove === 'rock'){
          result = 'you lose';
          msg.style.backgroundColor = "red";
          msg.style.color = "white";
        }else if(computerMove === 'paper'){
          result = 'you win';
          msg.style.backgroundColor = "lightgreen";
          msg.style.color = "black";
        }else if(computerMove === 'scissors'){
          result = 'tie';
          msg.style.backgroundColor = "lavender";
          msg.style.color = "black";
        }
      }

      msg.innerText =`you picked ${playerMove}. computer picked ${computerMove}. ${result}`;

  }

  function pickComputerMove(){
    const randomNumber = Math.random();
     let computerMove = '';

     if(randomNumber >= 0 && randomNumber <= 1/3){
        computerMove = 'rock';
     }else if(randomNumber >= 1/3 && randomNumber <= 2/3){
        computerMove = 'paper';
     }else if(randomNumber >= 2/3 && randomNumber <= 1){
        computerMove = 'scissors';
     }
     return computerMove;
  }
