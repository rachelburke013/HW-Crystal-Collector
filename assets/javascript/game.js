$( document ).ready(function(){

        var randomNumber=Math.floor(Math.random()*102+19)
        var purpleValue= Math.floor(Math.random()*12+1)
        var blueValue= Math.floor(Math.random()*12+1)
        var greenValue= Math.floor(Math.random()*12+1)
        var whiteValue= Math.floor(Math.random()*12+1)
    
        var currentScore= 0; 
        var wins= 0;
        var losses = 0;

    $('#RandomNumber').text(randomNumber);  

    $('#wins').text(wins);

    $('#losses').text(losses);

  function increaseWins(){
    wins++; 
    $('#wins').text(wins);
    reset();
  }

  function increaseLosses(){
    losses++;
    $('#losses').text(losses);
    reset();
  }

  function reset(){
    randomNumber=Math.floor(Math.random()*102+19);
    $('#RandomNumber').text(randomNumber);
    purpleValue= Math.floor(Math.random()*12+1);
    blueValue= Math.floor(Math.random()*12+1);
    greenValue= Math.floor(Math.random()*12+1);
    whiteValue= Math.floor(Math.random()*12+1);
    currentScore= 0;
    $('#currentScore').text(currentScore);
    } 


    $('.purple').on ('click', function(){
        currentScore = currentScore + purpleValue;
        $('#currentScore').text(currentScore); 
            if (currentScore == randomNumber){
              increaseWins();
            }
            else if ( currentScore > randomNumber){
              increaseLosses();
            } 
      })  
    
    $('.blue').on ('click', function(){
        currentScore = currentScore + blueValue;
        $('#currentScore').text(currentScore); 
            if (currentScore == randomNumber){
              increaseWins();
            }
            else if ( currentScore > randomNumber){
              increaseLosses();
            } 
      })  

      $('.green').on ('click', function(){
        currentScore = currentScore + greenValue;
        $('#currentScore').text(currentScore);
              if (currentScore == randomNumber){
              increaseWins();
            }
            else if ( currentScore > randomNumber){
              increaseLosses();
            } 
      })  

      $('.white').on ('click', function(){
        currentScore = currentScore + whiteValue;
        $('#currentScore').text(currentScore); 
              if (currentScore == randomNumber){
              increaseWins();
            }
            else if ( currentScore > randomNumber){
              increaseLosses();
            }
      });   
  
  }); 