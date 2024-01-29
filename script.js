// Selecting input box and paragraph
var guessnumber = document.getElementById("guessnumber");
var result = document.getElementById("result");
var score=document.getElementById("score")
var randomNumber = Math.floor(Math.random() * 10) + 1;
var totalscore= 10

function check() {
    var enterednumber = parseInt(guessnumber.value); // Parse the value to integer
    if (randomNumber === enterednumber) {
        console.log("right")
        result.textContent=" Hooray! You Got It!"
        alert("You won....")
    }
    else {
        totalscore = totalscore-1
        console.log("wrong")
        result.textContent="Oops! Try Again "
        score.textContent="score :"+totalscore 
        
    }
}
