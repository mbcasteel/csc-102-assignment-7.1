let secretNumber= Math.floor(Math.random()* 100 ) +1;

function play()
{
    var num = Math.ceil(Math.random()*10);
    var guess = Math.ceil(Math.random()*10);
    // 2 variables with random # 1-10

    if (guess > num)
    {
        document.getElementById("results").innerHTML= "Your gueess" + guess + " actual num" +  num + "YOU WIN!";
    }
    else if (guess == num)
    {
        document.getElementById("results").innerHTML = "Your guess" + guess + "actual num"  + num + "no one wins";
    }
    else
    {
         document.getElementById("results").innerHTML = "Your guess" + guess + "actual num"  + num + "YOU LOSE";

    }
}

 function checkGuess()
    {
        const guess = Number(document.getElementById("guessInput").value);
        
        if (guess == secretNumber)
        {
            message("Correct! You guessed the right number!");
        }
        else if (guess > secretNumber)
        {
            message("Too high! Try again.");
        }
        else {
            message("Too low! Try Again.");
        }
    }
function message(text)
{
    document.getElementById("result").textContent =text;
}

