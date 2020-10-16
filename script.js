let start = document.querySelector(".start");
let opening = document.querySelector(".opening");
let quiz = document.querySelector(".quiz");
let question = document.querySelector(".question");
let answers = document.querySelector(".answers");
let options = document.querySelectorAll(".options");
let optionsCorrect = document.querySelectorAll(".optionsCorrect");
let score = document.querySelector(".js-score");
let end = document.querySelector(".end");
let winner = document.querySelector(".winner");
let done = document.querySelector(".done");
let headers = document.querySelector(".headers");




quiz.style.opacity = 0;
let scoreAdded = score.innerText;
scoreAdded = 0

start.addEventListener("click", function () {
    
    opening.style.display = "none"
    quiz.style.opacity = 100;

})


for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", function (e) {
        e.target.style.backgroundColor = "#E87F6C";

    })
}


winner.style.opacity = 0; 
for (let i = 0; i < optionsCorrect.length; i++) {
    optionsCorrect[i].addEventListener("click", function (e) {
        e.target.style.backgroundColor = "#4CAF50";
        scoreAdded +=10
        score.innerText = scoreAdded
        
        if (scoreAdded >= 100) {
           
            end.addEventListener("click", function () {
                quiz.style.display = "none"
                headers.style.display = "none"
                winner.style.opacity = 100;
            })
        }
    })

}



















// score applied for right answer only, when anything clicked, move to next slid
//make all right answer the same class to make easier in css
//make all wrong asnwer the same class
