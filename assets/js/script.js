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

// Re-assignable variables
let questionCounter = 1;
let questionIndex = 0;
let answerIndex = 0;
let scoreCounter = 0;

const questionsAndAnswers = [
    {
        "question": "Which planet is the hottest in the solar system?",
        "answers": [
            "Jupiter", "Venus", "Saturn", "Pluto"
        ],
        "correct": 1
    },
    {
        "question": "Adventure of Sherlock Holmes' was written by which writer?",
        "answers": [
            "George Orwell", "Charles Dickens", "Arthur Conan Doyle", "Roald Dahl"
        ],
        "correct": 2
    },
    {
        "question": "What was the first toy to be advertised on television?",
        "answers": [
            "Mr Potato Head", "Lego", "Barbie", "Teenage Mutant Ninja Turtles"
        ],
        "correct": 0
    },
    {
        "question": "What is the name for a group of crows?",
        "answers": [
            "A Cauldron of Crows", "A Fluther of Crows", "A Murder of Crows", "A Conspiracy of Crows"
        ],
        "correct": 2
    },
    {
        "question": "How many ribs are in a human body?",
        "answers": [
            "Twenty-four", "Thirty-two", "Twenty-eight", "Twenty-six",
        ],
        "correct": 0
    },
    {
        "question": "How many eyes do bees have?",
        "answers": [
            "Seven", "Two", "Twelve", "Five",
        ],
        "correct": 3
    },
    {
        "question": "What element does the chemical symbol 'Au' stand for?",
        "answers": [
            "Antimony", "Europium", "Gold", "Zirconium",
        ],
        "correct": 2
    },
    {
        "question": "Who invented scissors?",
        "answers": [
            "Thales of Miletus", "John Charnley", "Leonardo da Vinci", "Tim Berners-Lee",
        ],
        "correct": 2
    },
    {
        "question": "In Greek mythology, who was known as the messenger of the gods?",
        "answers": [
            "Ares", "Hades", "Zeus", "Hermes",
        ],
        "correct": 3
    },
    {
        "question": "What does DNA stand for?",
        "answers": [
            "Dinitrobenzenes Neohexane Azodicarbonamide", "Deoxyribonucleic Acid", "Dibenzyldichlorosilane Naphthylurea Acid", "Deuterium Nitroxylenes Allylamine",
        ],
        "correct": 1
    }
];

// Refactored code

/*
---> Display question (added to init() function)
function displayQuestion(questionIndex) {
    questionEl.innerText = questionsAndAnswers[questionIndex].question;
}

---> Display answers (added to init() function)
function displayAnswers() {
    answer_1El.innerText = questionsAndAnswers[answerIndex].answers[0];
    answer_2El.innerText = questionsAndAnswers[answerIndex].answers[1];
    answer_3El.innerText = questionsAndAnswers[answerIndex].answers[2];
    answer_4El.innerText = questionsAndAnswers[answerIndex].answers[3];
}
*/

// Initial conditions
function init() {
    // Display question number
    questionNumberEl.innerText = `Question ${questionCounter}`;
    // Display question
    questionEl.innerText = questionsAndAnswers[questionIndex].question;
    // Display answers
    answer_1El.innerText = questionsAndAnswers[answerIndex].answers[0];
    answer_2El.innerText = questionsAndAnswers[answerIndex].answers[1];
    answer_3El.innerText = questionsAndAnswers[answerIndex].answers[2];
    answer_4El.innerText = questionsAndAnswers[answerIndex].answers[3];

    answerBtnsEl.forEach(button => {
        button.addEventListener('click', userAnswersQuestion);
    });
}

// 'Go to Quiz'
startQuizEl.addEventListener('click', function() {
    homePageEl.classList.add('invisible');
    quizPageEl.classList.remove('invisible');
    // Display question number
    questionNumberEl.innerText = `Question ${questionCounter}`;
    // Load question and answers
    init()
})

function userAnswersQuestion(clickEvent) {
    /* begin with the event object; refer to the target (answer buttons); 
    access the custom data attribute; specify the suffix of said attribute;
    and convert assigned value to an integer
    */
    const selectedAnswer = parseInt(clickEvent.target.dataset.index);

    /* compare the answer selected by the user with the 'correct' answer in the
    questionAndAnswers array
    */
    if (selectedAnswer === questionsAndAnswers[questionIndex].correct) {
        clickEvent.target.style.backgroundColor = 'green';
        scoreCounter++
        scoreCounterEl.innerText = scoreCounter;
        // Prevent validation of further answers
        preventFurtherAnswers()
    } else {
        clickEvent.target.style.backgroundColor = 'red';
        // Prevent validation of further answers
        preventFurtherAnswers()
    }

}