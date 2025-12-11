

      let score = JSON.parse(localStorage.getItem
    ('score')) || {
      wins : 0 ,
      loses : 0 ,
      ties : 0 
    };

    
    let isAutoPlaying = false ;
    let intervalId;
    function autoPlay(){
      if(!isAutoPlaying){
    
    intervalId = setInterval(function(){
      const move1 = pickComputerMove();
    const move2 = pickComputerMove();
      result1(move1,move2);
    },1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
    }

    function pickComputerMove(){
      let computerMove ;
    let randomNumber = Math.random();
    if( randomNumber >= 0 && randomNumber < 1 / 3){
      computerMove = 'rock';
    }
   else if(randomNumber >= 1/3 && randomNumber < 2 / 3){
      computerMove = 'paper';
    }
    else {
      computerMove = 'scissors';
    }
    
    return computerMove
    }
    function updateScoreElement(){
      document.querySelector('.js-score')
      .innerHTML = `wins : ${score.wins} loses : ${score.loses} Ties : ${score.ties}`;
    }

    function result1( computerMove , yourMove){
      let result ;
     
      if(computerMove === yourMove){
       result = 'Tie';
       score.ties++;
       
    }
   else if(computerMove === 'scissors' && yourMove === 'paper'){
       result = 'you lose.';
       score.loses++;
       
    }
    else if(computerMove === 'paper' && yourMove === 'rock'){
      result = 'you lose.';
      score.loses++;
      
    }
    else if(computerMove === 'rock' && yourMove === 'scissors'){
       result = 'you lose.';
       score.loses++;
       
    }
    else {
       result = 'you won.';
       score.wins++;
       
    }
    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

  

    document.querySelector('.js-result')
    .innerHTML = `${result}`;

    document.querySelector('.js-move')
    .innerHTML = `You <img src="images/${yourMove}-emoji.png" class="move-icon"> - <img src="images/${computerMove}-emoji.png" class ="move-icon"> computer`;
    
    }
  