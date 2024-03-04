// Retrieve elements from the DOM

// Buttons

// ---> Start Quiz 
const startQuizEl = document.querySelector('#btn-go-to-quiz');
// ---> Answer Question
const answer_1El = document.querySelector('#answer--1');
const answer_2El = document.querySelector('#answer--2');
const answer_3El = document.querySelector('#answer--3');
const answer_4El = document.querySelector('#answer--4');
// ---> Next Question
const nextQuestionEl = document.querySelector('#btn-forward');
// ---> Reset Game
const resetGameEl = document.querySelector('#start-again');

// Display Manipulation
const homePageEl = document.querySelector('.welcome-text');
const quizPageEl = document.querySelector('.quiz-container');
const resultPageEl = document.querySelector('.result-container')
const questionNumberEl = document.querySelector('#question-number');
const questionEl = document.querySelector('#question');
const answerBtnsEl = [answer_1El, answer_2El, answer_3El, answer_4El];
const scoreCounterEl = document.querySelector('#running-tally');
const finalScoreEl = document.querySelector('#final-score');
const scoreMessageEl =  document.querySelector('#score-message');