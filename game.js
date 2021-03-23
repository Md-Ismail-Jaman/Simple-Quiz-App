const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
// console.log(choices)

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availbleQuestions = [];

let questions =[
    // questions api
    {
      "question": "Inside which HTML element do we put the JavaScript??",
      "choice1": "<script>",
      "choice2": "<javascript>",
      "choice3": "<js>",
      "choice4": "<scripting>",
      "answer": 1
    },
    {
      "question": "What is the correct syntax for referring to an external script called 'xxx.js'?",
      "choice1": "<script href='xxx.js'>",
      "choice2": "<script name='xxx.js'>",
      "choice3": "<script src='xxx.js'>",
      "choice4": "<script file='xxx.js'>",
      "answer": 3
    },
    {
      "question": " How do you write 'Hello World' in an alert box?",
      "choice1": "msgBox('Hello World');",
      "choice2": "alertBox('Hello World');",
      "choice3": "msg('Hello World');",
      "choice4": "alert('Hello World');",
      "answer": 4
    }
  ]

// CREATING  CONSTANTS 

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

const startGame = () => {
    questionCounter = 0;
    score = 0 ;
    availbleQuestions = [...questions];
    // console.log(availbleQuestions);
    getNewQuestions();

}
const getNewQuestions = () =>{
  if (availbleQuestions.length === 0 ) {
  return window.location.assign("/end.html")    
  }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availbleQuestions.length)
    // console.log(questionIndex)
     currentQuestion = availbleQuestions[questionIndex]
    question.innerText = currentQuestion.question;
    // console.log(currentQuestion)

    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
      });
      availbleQuestions.splice(questionIndex, 1);
      acceptingAnswers = true;
};
choices.forEach(choice => {
  choice.addEventListener('click', event =>{
    if(!acceptingAnswers)return;
    acceptingAnswers = false;
    const selectedChoice = event.target;
    const selectedAnswer = selectedChoice.dataset["number"];
    // console.log(selectedAnswer == currentQuestion.answer);
     classToApply = 'incorrect';
if (selectedAnswer == currentQuestion.answer) {
  classToApply = 'correct';
};
selectedChoice.parentElement.classList.add(classToApply);
// console.log(classToApply)
setTimeout(() =>{
  selectedChoice.parentElement.classList.remove(classToApply);
  getNewQuestions();
},900)
    
    // console.log(event.target)
  })
})
startGame();