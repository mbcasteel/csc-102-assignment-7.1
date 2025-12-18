var count = 10;// global variable
var intervalidID;
var x = 400;
var y = 100;
var changex = 50;
var changey = 10;
function start()
{
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;

    intervalidID = setInterval(moveImage,500);// 1000 = # of ms before next moveImage
}
function stop()
{
   document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;  
    clearInterval(intervalidID);
}

function countDown()
{
    document.getElementById("countDown").innerHTML = count;
    count--;  //  count = count -1;

}
function moveImage()
{
   
    var image = document.getElementById("imgMeme");
    image.style.top = y + "px";
    image.style.left = x + "px";
    
    

    if (x + image.width> window.innerWidth || x <=0)// hit bottom or top of window
    {

    changex = -changex;
    }
    if (y + image.height > window.innerHeight || y <=0)
    {
        changey = -changey;
    }
    x +=changex;
    y +=changey;
}
function play()
{
    mySound = new sound("assets/fishing-reel-sound.mp3");
    mySound.play();
}
// internal helper function //

function sound(src)
{
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function()
    {this.sound.play();}
}

function stop()
{
    window.location.reload();
}