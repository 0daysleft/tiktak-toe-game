 let rock = document.getElementsByClassName('rock')[0];
          let paper = document.getElementsByClassName('paper')[0];
          let scissors = document.getElementsByClassName('scissors')[0];
          let resultsDiv = document.getElementsByClassName("results")[0];
          let resultScores = document.getElementsByClassName("result-scores")[0];
          let wins = 0;
          let losses = 0;
          let ties = 0;

          function displayResults() {
               resultScores.innerHTML = 
                                   `
                                       <span style=" color: green; font-weight: 900">Wins: ${wins} </span> </br>
                                        <span style=" color: magenta; font-weight: 900">Ties: ${ties} </span> </br>
                                        <span style=" color: red; font-weight: 900">Losses: ${losses} </span> </br>
                                        <span style=" color: blue; font-weight: 900">Total Times Played: ${wins + ties + losses} </span>
                                   `
          }

          function computerMove(){
               let options = ['Paper 🖐️', 'Scissors ✌️', 'Rock ✊']
               let selectOption = Math.floor(Math.random() * options.length)

               return options[selectOption];
          }

          rock.addEventListener('click', () => {
              
               resultsDiv.innerHTML = ` You Choosed Rock ✊ and Computer Choosed ${computerMove()}`;
               if(computerMove() === 'Paper 🖐️'){
                    losses++;
               }
               else if(computerMove() === 'Scissors ✌️'){
                    wins++;
               }
               else{
                    ties++;
               }
               // if(computerMove >= 0 && computerMove <= 2)
               //      {
               //           resultsDiv.innerHTML = "You picked Rock ✊ and Computer Picked Rock ✊: You TIE 😒";
               //           ties++;
               //      }
               //      else if(computerMove >= 3 && computerMove <= 5)
               //      {
               //           resultsDiv.innerHTML = "You picked Rock ✊ and Computer Picked Paper 🖐️: You Won 🥳";
               //           wins++;
               //      }
               //      else if(computerMove >= 6 && computerMove <= 8){
               //           resultsDiv.innerHTML = "You picked Rock ✊ and Computer Picked Scissors ✌️: You Lost ☠️";
               //           losses++;
               // }
               displayResults();
          })
          
          paper.addEventListener('click', () => {
              

               resultsDiv.innerHTML = ` You Choosed Paper 🖐️ and Computer Choosed ${computerMove()}`;
                    if(computerMove() === 'Paper 🖐️'){
                         ties++;
                    }
                    else if(computerMove() === 'Scissors ✌️'){
                         losses++;
                    }
                    else{
                         wins++;
                    }
               // if(computerMove >= 0 && computerMove <= 2)
               //      {
               //           resultsDiv.innerHTML = "You picked Paper 🖐️ and Computer Picked Rock ✊: You Won 🥳";
               //           wins++;
               //      }
               //      else if(computerMove >= 3 && computerMove <= 5)
               //      {
               //           resultsDiv.innerHTML = "You picked Paper 🖐️ and Computer Picked Paper 🖐️: TIE 😒";
               //           ties++;
               //      }
               //      else if(computerMove >= 6 && computerMove <= 8){
               //           resultsDiv.innerHTML = "You picked Paper 🖐️ and Computer Picked Scissors ✌️: You Lost 😂";
               //           losses++;
               // }
               
               displayResults();
               
          })
          
          scissors.addEventListener('click', () => {

               resultsDiv.innerHTML = ` You Choosed Scissors ✌️ and Computer Choosed ${computerMove()}`;
                    if(computerMove() === 'Paper 🖐️'){
                         wins++;
                    }
                    else if(computerMove() === 'Scissors ✌️'){
                         ties++;
                    }
                    else{
                         losses++;
                    }
               
               // if(computerMove >= 0 && computerMove <= 2)
               //      {
               //           resultsDiv.innerHTML = "You picked Scissors ✌️ and Computer Picked Rock ✊: You Lost 😂";
               //           losses++;
               //      }
               //      else if(computerMove >= 3 && computerMove <= 5)
               //      {
               //           resultsDiv.innerHTML = "You picked Scissors ✌️ and Computer Picked Paper 🖐️: You Won 🥳";
               //           wins++;
               //      }
               //      else if(computerMove >= 6 && computerMove <= 8){
               //           resultsDiv.innerHTML = "You picked  Scissors ✌️ and Computer Picked Scissors ✌️: TIE 😒";
               //           ties++;
                         
               // }
               
               displayResults();
          })

                   
          
