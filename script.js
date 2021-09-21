var startQuizDiv = document.getElementById("startQuizDiv");
var startQuizButton = document.getElementById("startQuizButton");
var Question1 = document.getElementById("Question1");

startQuizButton.addEventListener("click",function() { 
    startQuizDiv.classList.add("hidden")
    Question1.classList.remove("hidden")

})


//how many things inside element