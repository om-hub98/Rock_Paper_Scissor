let score=JSON.parse(localStorage.getItem('score'));

          if(score === null){
               score ={
                    win: 0,
                    loss: 0,
                    tie: 0
               };
          }

          updateScore();       

          function playGame(playerMove) {
               const computerMove = pickComputerMove();
               let result = '';
               if (playerMove === 'rock') {
                    if (computerMove === 'rock') {
                         result = 'Its Tie';
                    } else if (computerMove === 'paper') {
                         result = 'You lose';
                    } else if (computerMove === 'scissor') {
                         result = 'You win';
                    }
               } else if (playerMove === 'paper') {
                    if (computerMove === 'paper') {
                         result = 'Its Tie';
                    } else if (computerMove === 'rock') {
                         result = 'You win';
                    } else if (computerMove === 'scissor') {
                         result = 'You lose';
                    }
               } else if (playerMove === 'scissor') {
                    if (computerMove === 'scissor') {
                         result = 'Its Tie';
                    } else if (computerMove === 'paper') {
                         result = 'You win';
                    } else if (computerMove === 'rock') {
                         result = 'You lose';
                    }
               }

               if(result === 'You win'){
                    score.win +=1;
               }else if(result === 'You lose'){
                    score.loss +=1;
               }
               else if(result === 'Its Tie'){
                    score.tie +=1;
               }

               localStorage.setItem('score',JSON.stringify(score));

               document.querySelector('.js-result').innerHTML=`${result}`;

               document.querySelector('.js-move')
                    .innerHTML=`You  <img class="move-icon" src="images/${playerMove}-emoji.png"> Computer <img class="move-icon" src="images/${computerMove}-emoji.png">`;
               
               updateScore(); 

            //    alert(`You picked up ${playerMove}. Computer picked up ${computerMove}. ${result}.
            //           Win : ${score.win} , Loss : ${score.loss} , tie : ${score.tie}`);
          }

          function pickComputerMove() {
               let computerMove = '';
               let randomNumber = '';
               randomNumber = Math.random();
               if (randomNumber >= 0 && randomNumber < 1 / 3) {
                    computerMove = 'rock';
               } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
                    computerMove = 'paper';
               } else if (randomNumber > 2 / 3 && randomNumber < 1) {
                    computerMove = 'scissor';
               }
               return computerMove;
          }

          function updateScore(){
            document.querySelector('.js-score')
             .innerHTML=` Win : ${score.win} , Loss : ${score.loss} , tie : ${score.tie}`;
          }