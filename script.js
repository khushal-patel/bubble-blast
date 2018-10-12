alert("Welcome! <br> game rules are:- <br> 1. See the number written in the target section. <br> 2. hit that number bubble and score 10 points for each correct hit.");

var gameboard = document.querySelector("#gameboard");

// timer code

var timerVal = document.querySelector("#timerVal");
timerVal.innerText = 61;

function changeTimer(){
    if(timerVal.innerText > 0){
            timerVal.innerText -= 1;
    }
    else{
        gameboard.innerHTML = '<h1>GAME OVER !</h1>';
    }
}

setInterval(changeTimer,1000);
changeTimer();

// timer code end

function changeNumbers(){    
    for(i=1; i<=30; i++)
    {
        var random = Math.floor(Math.random()*10);
        gameboard.innerHTML = gameboard.innerHTML + '<div class="bubble">'+ random + '  </div>'
    }

}

changeNumbers();

// target code start

function changeTarget(){
    var targetVal = document.querySelector("#targetVal");
    var random = Math.floor(Math.random()*10);
    targetVal.innerText = random;
};

// target code end
changeTarget();

// score code start

var scoreVal = document.querySelector("#scoreVal");

function changeScore(){
    scoreVal.innerText = Number(scoreVal.innerText) + 10;
}

// score code end

// skip code start

var skip = document.querySelector("#skip");

skip.addEventListener('click', function(){
    changeTarget();
    gameboard.innerText = '';
    changeNumbers();
});



var bubble = document.querySelector(".bubble");
var targetVal = document.querySelector("#targetVal");

gameboard.addEventListener('click', function(e){
     
    if(e.target.className == 'bubble'){
        if(e.target.innerText == targetVal.innerText){
            changeScore();
            changeTarget();
            gameboard.innerText = "";
            changeNumbers() ;   
        }
        else{
            gameboard.innerText = "";
            changeNumbers();
        }    
    }
    else{
    }







    // if(e.target.className == 'bubble'){
    //     if(e.target.innerText == targetVal.innerText){
    //         changeScore();
    //         changeTarget();
    //         gameboard.innerText = '';
    //      }
    //     else{
    //         changeNumbers();
    //         gameboard.innerText = '';
    //     }
    // }    
})





