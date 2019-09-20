'use strict'

//Question Database
const STORE = [
    {
        question: 'What band/artist famous for playing Jumping Jack Flash?',
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
        question: 'What year did the Grateful Dead decomission the wall of sound?',
        answers: [
            '1965',
            '1972',
            '2015',
            '1974'
        ],
        correctAnswer: '1974'
    },

    {
        question: 'What was the original name of Led Zepplin?',
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

//Starts quiz when the user clicks on the start button
function startQuiz () {}

//creates html for the quiz questions
function renderQuestions () {}

//Selects the user selected answer for each question
function selectAnswer () {}

//Submits the user selected answer for each question and returns feedback
function submitAnswer () {}

//moves to the next question
function nextQuestion () {}

//restarts the quiz from the beginning without reloading the page
function restartQuiz () {}

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



