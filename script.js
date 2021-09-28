var startQuizDiv = document.getElementById("startQuizDiv");
var startQuizButton = document.getElementById("startQuizButton");
var Question1 = document.getElementById("Question1");
var score =  0;
var scoreContainer = document.getElementById("score");
var timer=0;
var displayTimer = document.getElementById("timer");
var body = document.getElementsByTagName("body")[0]
var inputContainer = document.getElementById("inputContainer");
var inputButton = document.getElementById("inputButton");
var inputUser = document.getElementById("inputUser");
var listContainer = document.getElementById("listContainer");
//addInitials();


scoreContainer.innerHTML = score;

console.dir(scoreContainer)

startQuizButton.addEventListener("click",function() { 
    startTimer();
    startQuizDiv.classList.add("hidden")
    Question1.classList.remove("hidden")
})

Question1.addEventListener("click", function(event){
    console.log(event)
    if (event.target.id == "Answer13") {
    score =+ 50
    // scoreContainer.innerHTML = "your score is " + score
}
    else if (event.target.id == "Answer11"|| event.target.id == "Answer12"|| event.target.id =="Answer14") {
    seconds= seconds -5}
    else {return}
    console.log(score)
    Question1.classList.add("hidden")
    Question2.classList.remove("hidden")

});


Question2.addEventListener("click", function(event){
    console.log(event)
    if (event.target.id == "Answer23") {
    score = score + 50
    // scoreContainer.innerHTML = "your score is " + score
}
    else if (event.target.id == "Answer21"|| event.target.id == "Answer22"|| event.target.id =="Answer24") {
    seconds = seconds -5}
    else {return}
    console.log(score)
    Question2.classList.add("hidden")
    Question3.classList.remove("hidden")

});


Question3.addEventListener("click", function(event){
    console.log(event)
    if (event.target.id == "Answer34") {
    score = score + 50 
    // scoreContainer.innerHTML = "your score is " + score
}
    else if (event.target.id == "Answer31"|| event.target.id == "Answer32"|| event.target.id =="Answer33") {
    seconds= seconds -5}
    else {return}
    console.log(score)
    Question3.classList.add("hidden")
    Question4.classList.remove("hidden")

});

Question4.addEventListener("click", function(event){
    console.log(event)
    if (event.target.id == "Answer41") {
    score = score + 50
    // scoreContainer.innerHTML = "your score is " + score
}
    else if (event.target.id == "Answer42"|| event.target.id == "Answer43"|| event.target.id =="Answer44") {
    seconds= seconds -5}
    else {return}
    console.log(score)
    Question4.classList.add("hidden")
    seconds = 0;
    // addInitials();
});

var seconds = 60;

function startTimer () {
    
   var timerTimer = setInterval (function (){   
        if (seconds ==0) {
            clearInterval (timerTimer)
        displayTimer.classList.add("hidden");
        Question1.classList.add("hidden");
        Question2.classList.add("hidden");
        Question3.classList.add("hidden");
        Question4.classList.add("hidden");
        var newScore = document.createElement("div");
        newScore.innerHTML = "your score is " + score;
        body.appendChild(newScore);
        addInitials();
        }
       
        seconds--;
        displayTimer.innerText = "Timer is " + seconds;

    },1000)
}

function addInitials(){
    inputContainer.classList.remove('hidden');
    inputButton.addEventListener("click", function(){
        var inputValue = inputUser.value 
        var newList = document.createElement("li")
        newList.innerText = inputValue + ": " + score;
        listContainer.appendChild(newList)
    })
}