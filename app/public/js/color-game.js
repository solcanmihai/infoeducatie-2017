var nrOfSquares = 6;
var colors = generateRandomColors(nrOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function()
{
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    nrOfSquares = 3;
    colors = generateRandomColors(nrOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.background = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";

    for(var i = 0; i < squares.length; i++)
    {
        if(colors[i])
        {
            squares[i].style.background = colors[i];
        }
        else
        {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function()
{
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    nrOfSquares = 6;
    messageDisplay.textContent = "";


    colors = generateRandomColors(nrOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.background = "steelblue";
    resetButton.textContent = "New Colors";

    for(var i = 0; i < squares.length; i++)
    {
        squares[i].style.display = "block";
        squares[i].style.background = colors[i];
    }
});

resetButton.addEventListener("click", function()
{
    colors = generateRandomColors(nrOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.background = "steelblue";

    for(var i = 0; i < squares.length; i++)
    {
        squares[i].style.background = colors[i];
    }

    messageDisplay.textContent = "";
    this.textContent = "New Colors";
});

colorDisplay.innerHTML = pickedColor;

for(var i = 0; i < squares.length; i++)
{
    //Add initial colors
    squares[i].style.background = colors[i];
    
    //Click listeners to colors
    squares[i].addEventListener("click", function(){
        //grab color of clicked color, and compare to pickedColor
        if(this.style.background === pickedColor)
        {
            messageDisplay.textContent = "Correct!";
            changeColors(pickedColor);
            h1.style.background = pickedColor;
            resetButton.textContent = "Play again?";
        }
        else
        {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try again!";
        }
    });
}

function changeColors(color)
{
    //loop through all squares
    for(var i = 0; i < squares.length; i++)
    {
        squares[i].style.background = color;
    }
}

function pickColor()
{
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function randomColor()
{
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function generateRandomColors(num)
{
    var arr = [];

    for(var i = 0; i < num;  i++)
    {
        arr[i] = randomColor();
    }

    return arr;
}
