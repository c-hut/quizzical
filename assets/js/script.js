// N.B. Please ignore last commit message - it was committed in error

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
const homePageVidEl = document.querySelector('.welcome-container');
const homePageTxtEl = document.querySelector('.welcome-text');
const quizPageEl = document.querySelector('.quiz-container');
const resultPageEl = document.querySelector('.result-container');
const winnerVideo = document.querySelector('.winner');
const loserVideo = document.querySelector('.loser');
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

// Idea for 'Querstion and Answers' array came from my mentor, Spencer Barriball
const questionsAndAnswers = [
    {
        "question": "Which planet is the hottest in the solar system?",
        "answers": [
            "Jupiter", "Venus", "Saturn", "Pluto"
        ],
        "correct": 1
    },
    {
        "question": "Adventures of Sherlock Holmes' was written by which writer?",
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
    // Iterate over answers, wait for a click and execute the 'User Answers Question' function
    answerBtnsEl.forEach(button => {
        button.addEventListener('click', userAnswersQuestion);
    });
}

// Prevent further answers upon selection
function preventFurtherAnswers() {
    answerBtnsEl.forEach(button => {
        button.removeEventListener('click', userAnswersQuestion);
    })
}

// 'Go to Quiz'
startQuizEl.addEventListener('click', function() {
    // Manipulate 'invisible' class
    homePageVidEl.classList.add('invisible');
    homePageTxtEl.classList.add('invisible');
    quizPageEl.classList.remove('invisible');
    // Load question and answers
    init()
})

// Add event listener for 'userAnswersQuestion' function: iterate over answer buttons and call function
answerBtnsEl.forEach(button => {
    button.addEventListener('click', userAnswersQuestion);
});

function userAnswersQuestion(clickEvent) {
    // Decision made not to highlight correct answer in case the user wants to play again

    /* Begin with the event object; refer to the target (answer buttons); 
    access the custom data attribute; specify the suffix of said attribute;
    and convert assigned value to an integer
    */
    const selectedAnswer = parseInt(clickEvent.target.dataset.index);

    /* Compare the answer selected by the user with the 'correct' answer in the
    questionAndAnswers array
    */
    if (selectedAnswer === questionsAndAnswers[questionIndex].correct) {
        // Change the background colour of the button to green
        clickEvent.target.style.backgroundColor = 'green';
        // Increment the score count by 1
        scoreCounter++
        // Display the updated score
        scoreCounterEl.innerText = scoreCounter;
        // Prevent validation of further answers
        preventFurtherAnswers()
    } else {
        clickEvent.target.style.backgroundColor = 'red';
        // Prevent validation of further answers
        preventFurtherAnswers()
    }

}

// 'User Clicks Next'
nextQuestionEl.addEventListener('click', function() {
    //Increment question by 1
    questionIndex++;
    // Increment indices by 1
    answerIndex++;

    if(questionCounter === 10) {
        // Manipulate 'invisible' class
        quizPageEl.classList.add('invisible');
        resultPageEl.classList.remove('invisible');
        // Display the final score
        finalScoreEl.innerText = scoreCounter;
        if(scoreCounter >= 8) {
            // Display congratulatory message
            scoreMessageEl.innerText = `Congratulations, you win!`;
        } else {
            // Display commiseration message
            scoreMessageEl.innerText = `Better luck next time!`;
            // Display loser video and hide winner video
        }

        // Toggle visibility of winner and loser videos based on the user score
        winnerVideo.classList.toggle('invisible', scoreCounter < 8);
        loserVideo.classList.toggle('invisible', scoreCounter >= 8);

    } else {
        // Increment question number
        questionCounter++;
        // Displaying the question number
        questionNumberEl.innerText = `Question ${questionCounter}`;
        // Display next question and answers
        init();
         // Iterate over the answer button and update their colour, respectively
        answerBtnsEl.forEach(button => {
            button.style.backgroundColor = '';
        });
    }
});

// 'User Resets Game'
resetGameEl.addEventListener('click', function() {
    // Reset the values
    questionCounter = 1;
    scoreCounter = 0;
    questionIndex = 0;
    answerIndex =  0;
    // Restore the button colour for each button, respectively
    answerBtnsEl.forEach(button => button.style.backgroundColor = '#AA7039');
    // Manipulate 'invisible' class
    resultPageEl.classList.add('invisible');
    homePageVidEl.classList.remove('invisible');
    homePageTxtEl.classList.remove('invisible');
    // Reset the score and question counters
    scoreCounterEl.innerText = scoreCounter;
    questionNumberEl.innerText = `Question ${questionCounter}`;
    // Call the 'init' function
    init();
});