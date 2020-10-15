let start = document.querySelector(".start");
let opening = document.querySelector(".opening");
let quiz = document.querySelector(".quiz");
let question = document.querySelector(".question");
let answers = document.querySelector(".answers");
// let button = document.querySelector(".submit");
let options = document.querySelectorAll(".options");
let optionsCorrect=document.querySelectorAll(".optionsCorrect");
// let a = document.querySelector(".option1");
// let b = document.querySelector(".option2");
// let c = document.querySelector(".option3");
// let d = document.querySelector(".option4");
let finalResult = document.querySelector(".final")

let one = document.querySelector(".one");

// function animeQuiz(){
//     // let output [];

// }

// function resultSection(){

// }

// button.addEventListener("click", resultSection);


let animeQuestions = [
    {
        Question: "What is the name of the cadet who found out he was a Titan in the hit show Attack On Titan?",
        Answers: {
            a: "Mikasa Ackerman",
            b: "Erin Yeager",
            c: "Connie Springer",
            d: "Armin Arlet",
        },
        rightAnswer: "b"
    },
    {
        Question: "Where do trainers take their Pokemon after a battle to be healed?",
        Answers: {
            a: "Pokemon Hospital",
            b: "Pokemon Clinic",
            c: "Pokemon Infirmary",
            d: "Pokemon Center"
        },
        rightAnswer: "d"
    },
    {
        Question: "From the hit anime Bleach, was it confirmed if Ichigo's father was a shinigami?",
        Answers: {
            a: "Yes, it was confirmed! He is a shinigami.",
            b: "No, there was no confirmation.",
        },
        rightAnswer: "a"
    },
    {
        Question: "What was Saitama's workout routine that got him so fit!",
        Answers: {
            a: "Strict diet with strict cardio",
            b: "Strenght training",
            c: "100 situps 100 pushups 100 squats 10 km run",
            d: "Endurance exercises",
        },
        rightAnswer: "c"
    },
    {
        Question: "What is the name of the shinigami that dropped his death note, that was eventually found by Light Yagami?",
        Answers: {
            a: "Ryuk",
            b: "Rem",
            c: "Arma Arma",
            d: "Gelus",
        },
        rightAnswer: "a"
    },
    {
        Question: "What is Sailor Moon's black cat's name?",
        Answers: {
            a: "Solana",
            b: "Kitty",
            c: "Luna",
            d: "Harry",
        },
        rightAnswer: "c"
    },
    {
        Question: "Who is the main character of Hunter X Hunter?",
        Answers: {
            a: "Goku",
            b: "Gon",
            c: "Sasuke",
            d: "Gohan",
        },
        rightAnswer: "b"
    },
    {
        Question: "What do the Dragon Ball Z fighters do to restore their health after a battle?",
        Answers: {
            a: "Eat Senzu Beans",
            b: "Meditate",
            c: "Take pills",
            d: "Go to the Hospital",
        },
        rightAnswer: "a"
    },
    {
        Question: "Who does Naruto get married to?",
        Answers: {
            a: "Hinata",
            b: "Sakura",
            c: "Tenten",
            d: "Temari",
        },
        rightAnswer: "a"
    },
    {
        Question: "In the popular anime My Hero Academia, what are the U.A. students learning/training to become?",
        Answers: {
            a: "Soldiers",
            b: "Teachers",
            c: "Clowns",
            d: "Superheroes",
        },
        rightAnswer: "d"
    },
]



// function animeQuiz(){
//     let output = [];

//     animeQuestions.forEach(
//       (currentQuestion, number) => {

//         let answers = [];

//         for(letter in currentQuestion.answers){

//           // ...add an HTML radio button
//           answers.push(
//             `<label>
//               <input type="radio" name="question${number}" value="${letter}">
//               ${letter} :
//               ${currentQuestion.answers[letter]}
//             </label>`
//           );
//         }

//         // add this question and its answers to the output
//         output.push(
//           `<div class="question"> ${currentQuestion.question} </div>
//           <div class="answers"> ${answers.join('')} </div>`
//         );
//       }
// }


// function seeQuestions (inquiry, questions) {
//     let output [];
//     let answers;
//     for(let i=0; i<inquiry.length; i++) {
//         answers = [];
//         for(letter in inquiry[i].answers)
//     }
// }

// function animeQuiz () {
//     a.innerText = reply[0];
//     b.innerText = reply[1];
//     c.innerText = reply[2];
//     d.innerText = reply[3];
//     results.forEach(answer => {
//         results.addEventListener("click", )
//     })
// }

// let currentQuestion = 0;
// let currentAnswer = 0;
// let quiz = false;

// $(document).ready(function(){
//     displayQuestions();

// start.addEventListener("click", startQuiz);

// function startQuiz(){
//     start.style.display ="none";
//     counter();
//     questionRender();
//     quiz.style.display = "block"

// }

// })

// animeQuestions[0].questions
// animeQuestions[0].a
// animeQuestions[0].b
// animeQuestions[0].c
// animeQuestions[0].d
// animeQuestions[0].rightAnswer

// let lastQues = questions.length -1; 

// function checkAnswer(answer){
//     if(runningQues < lastQues) {
//           count = 0;
//           runningQues++;

//     }
// }



// let scoreAdded = score.innerText;
// scoreAdded = 0
// function nextPage(){
//     opening.style.opacity = 0;
//     quiz.style.opacity = 1;
//     option1.innerText = animeQuestions[0].a
//     option2.innerText = animeQuestions[0].b;
//     option3.innerText = animeQuestions[0].c;
//     option4.innerText = animeQuestions[0].d;
//     results.forEach(results => {
//         results.addEventListener("click", )
//     })
// }
//let random =animeQuestions[Math.floor(Math.random() * animeQuestions.length)]
// for(let i=0; i < animeQuestions.length; i++) {
// }  
quiz.style.opacity = 0;

start.addEventListener("click", function () {
    // question.innerText= random.Question

    opening.style.display = "none"
    quiz.style.opacity = 100;
})


for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", function (e) {
        e.target.style.backgroundColor= "#E87F6C";
    })
}


for (let i = 0; i < optionsCorrect.length; i++) {
    optionsCorrect[i].addEventListener("click", function (e) {
        e.target.style.backgroundColor= "#50653D";
    })
}
//}



// let wrong = document.getElementsByClassName("wrong");
// for (var i = 0; i < wrong.length; i++) {
//     wrong[i].addEventListener('click', function (e) {
//         e.target.style.backgroundColor = '#FF007C;
//     })
// }














//     animeQuestions[i].addEventListener("click", function (e) {
//         e.preventDefault();
//         let div = document.createElement("div");
//         div.innerHTML = animeQuestions[i].answers;
//         animeQuestions[i].appendChild(div);

//         scoreAdded +=10
//         score.innerText=scoreAdded
//     })    

// score applied for right answer only, when anything clicked, move to next slide



//make all right answer the same class to make easier in css
//make all wrong asnwer the same class
