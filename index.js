'use strict';

//Question Database
const STORE = [
    {
        question: 'What band/artist is famous for playing Jumping Jack Flash?',
        answers: [
            'Gucci Mane',
            'Jack Johnson',
            'The Rolling Stones',
            'Phish'
        ],
        correctAnswer:
        'The Rolling Stones'
    },

    {
        question: 'What band was John Lennon a part of?',
        answers: [
            'Rush',
            'The Beatles',
            'Tedeschi Trucks Band',
            'Maroon 5'
        ],
        correctAnswer: 'The Beatles'
    },

    {
        question: 'What year did the Grateful Dead decommission the wall of sound?',
        answers: [
            '1965',
            '1972',
            '2015',
            '1974'
        ],
        correctAnswer: '1974'
    },

    {
        question: 'What was the original name of Led Zeppelin?',
        answers: [
            'The Wallflowers',
            'The Band',
            'Greensky Bluegrass',
            'The New Yard Birds'
        ],
        correctAnswer: 'The New Yard Birds'
    },

    {
        question: 'Was instrument is Jethro Tull famous for using?',
        answers: [
            'Violin',
            'Flute',
            'Sitar',
            'Steel Guitar'
        ],
        correctAnswer: 'Flute'
    }
]

//global variables to store the quiz score and current question number information
let score = 0;
let questionNumber = 0;

//Starts quiz when the user clicks on the start button
function startQuiz () {
    $('#start').on('click', function(){
        renderQuestions();
    });
}

//function to update current question number by increments of 1
function updateQuestionNumber () {
    questionNumber++;
    $('.questionNumber').text(questionNumber + 1);
}

//function to add one point to the current score number by increments of 1
function addOneToScore () {
    score++;
    $('.score').text(0);
    $('.questionNumber').text(0);
}

//creates html for the quiz questions and answers
function renderQuestions () {}

//Selects the user selected answer for each question
function selectAnswer () {}

//Submits the user selected answer for each question and returns feedback
//will addOneToScore if correct or not if incorrect
function submitAnswer () {}

//moves to the next question when user clicks 'next' button
function nextQuestion () {}

//restarts the quiz from the first question without reloading the page
function restartQuiz () {}

//resets question number and quiz score
function resetScores () {}

//runs the required functions
function generateQuiz () {
    startQuiz();
    renderQuestions();
    selectAnswer();
    submitAnswer();
    nextQuestion();
    restartQuiz();
}

$(generateQuiz);



