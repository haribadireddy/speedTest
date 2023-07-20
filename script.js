let enterButton = document.getElementById("enterButton");
let inputElement = document.getElementById("inputElelemnt");
let nameElement = document.getElementById("nameElement")
let scoreDisplay = document.getElementById("latestScoreDisplay");
let inputValue = inputElement.value
enterButton.addEventListener("click", function(event) {
    let inputValue = inputElement.value
    if (inputValue === "") {
        alert("Enter your name")
    } else {
        nameElement.textContent = inputValue
    }
})

let startButton = document.getElementById("startButton");
startButton.addEventListener("click", function(event) {
    startTimer()
    getQuote()
})



let quoteDisplayElement = document.getElementById("quoteDisplay");
let spinnerElement = document.getElementById("spinner")

function getQuote() {
    let options = {
        method: "GET"
    };
    let url = "https://apis.ccbp.in/random-quote";
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            quoteDisplayElement.textContent = jsonData.content
        });

}


let timerElement = document.getElementById("timer");
let textAreaElement = document.getElementById("quoteInput");
let textAreaValue = textAreaElement.value
let intervalId;
let counter = 0

function startTimer() {

    intervalId = setInterval(function() {
        counter = counter + 1;
        timerElement.textContent = counter
    }, 1000)

}

let resetButton = document.getElementById("resetBtn");
resetButton.onclick = function() {
    spinnerElement.classList.add("d-block")
    spinnerElement.classList.remove("d-block")
    getQuote()
    clearInterval(intervalId)
    resultElement.textContent = ""
    textAreaElement.value = ""
    counter = 0
    startTimer()
}

let resultElement = document.getElementById("result");

let submitButton = document.getElementById("submitBtn");
submitButton.addEventListener("click", function(event) {
    if (quoteDisplayElement.textContent === textAreaElement.value) {
        clearInterval(intervalId)
        resultElement.textContent = "Congratulations " + inputElement.value + ", You typed in " + counter + " seconds"
        localStorage.setItem(inputElement.value, counter)
    } else {
        resultElement.textContent = "You typed incorrect sentence."
    }


})