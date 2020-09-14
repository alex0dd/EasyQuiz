const quizQuestions = [
    {
        title: "Which year did Tim Berners-Lee invent the World Wide Web?",
        answers: [
            "1991",
            "1985",
            "1989",
            "1999"
        ],
        correctAnswerIdx: 2
    },
    {
        title: "HTML stands for Hyper Text Markup ...",
        answers: [
            "Loop",
            "Language",
            "Luggage",
            "Layout"
        ],
        correctAnswerIdx: 1
    }
];

const quizTitleEl = document.getElementById("question-text");
const quizAnswersEls = document.querySelectorAll(".quiz-answers-item");

var currentQuestionIndex = 0;

showCurrentQuestion();

function checkAnswer(correctAnswer, givenAnswer){
    if (correctAnswer == givenAnswer){
        console.log("Correct answer");
    }
    else{
        console.log("Wrong answer");
    }
}

function showCurrentQuestion(){
    if(currentQuestionIndex < quizQuestions.length){
        var questionEntry = quizQuestions[currentQuestionIndex];
        quizTitleEl.innerText = questionEntry.title;
        quizAnswersEls.forEach((answerEntry, index) => {
            // set answer text
            answerEntry.innerText = questionEntry.answers[index];
            answerEntry.onclick = () => {
                checkAnswer(questionEntry.correctAnswerIdx, index);
                currentQuestionIndex += 1;
                showCurrentQuestion();
            }
        });
    }
    else{
        alert("You've finished!");
        quizAnswersEls.forEach((answerEntry) => {
            // deactivate the event handlers
            answerEntry.onclick = () => {}
        });
    }
}