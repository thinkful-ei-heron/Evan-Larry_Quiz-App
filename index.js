/* eslint-disable no-console */
'use strict';

//Question Database
const STORE = {
  questionNumber: 0,
  score: 0,
  questions: [
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
        question: 'What instrument is Jethro Tull famous for using?',
        answers: [
            'Violin',
            'Flute',
            'Sitar',
            'Steel Guitar'
        ],
        correctAnswer: 'Flute'
    }]
};

// Generates and returns the HTML string to render inside the form fieldset.
// State is indicator to detemine which display we need.
// STORE is accepted even though there is no need for it, instructions say to do
// this we assume later the global will be removed and this code will accept
// data from a backend or a class object.
function generateFormFieldsetString(state, refStore) {
  let sectionHtml = '';
  let buttonHtml = '';  
  
  switch (state) {
  case 'initialize': {
    sectionHtml += '<p class="messageText">How well do you know your classic rock\
 history?</p>';
    buttonHtml += `<div class="buttonRow">
                    <button type="button" id="start">Start Quiz</button>
                  </div>`;
  }
    break;

  case 'question': {
    sectionHtml += `<section class="statistics">
                      <p>Question:  ${refStore.questionNumber + 1} / ${refStore.questions.length}</p>
                      <p>Score: ${refStore.score} / ${refStore.questionNumber}</p>
                    </section>
                    <form class="questionAnswers">
                      <p>QUESTION: ${refStore.questions[refStore.questionNumber].question}</p>`;
    let i = 0;
    refStore.questions[refStore.questionNumber].answers.forEach(function (answer) {
      sectionHtml += `<input type="radio" name="answer" value="${i}">${answer}<br>`;
      i++;
    });
    buttonHtml += `  <div class="buttonRow">
                      <button type="submit" id="submitAnswer">Submit</button>
                     </div>
                   </form>`;
  }
    break;
  
  case 'correctAnswer': {
    sectionHtml += '<p class="messageText">You are correct!</p>';
    buttonHtml += `<div class="buttonRow">
                    <button type="button" id="next">Next >></button>
                  </div>`;    
  }
    break;

  case 'incorrectAnswer': {
    sectionHtml += '<p class="messageText">Sorry, the correct answer is CORRECT ANSWER</p>';
    buttonHtml += `<div class="buttonRow">
                    <button type="button" id="next">Next >></button>
                  </div>`;
  } 
    break;
  }  //End switch-case statement

  return `<legend>Rock and Roll</legend>
            ${sectionHtml}
           ${buttonHtml}`;
}

//Initializes quiz, clearing variables and refreshing screen with intro text.
function initializeQuiz () {
  STORE.questionNumber = 0;
  STORE.score = 0;
  renderFieldsetForm('initialize');
}

// Refreshes the DOM fieldset with content from within a string that is returned 
// from the string rendering function.
function renderFieldsetForm (state) {
  const renderedHTMLString = generateFormFieldsetString(state, STORE);

  //Refresh that HTML to the DOM at the fieldset location.
  $('.js-fieldset').html(renderedHTMLString);
}

//Starts quiz when the user clicks on the start button
function startQuiz () {
    $('#start').on('click', function(){
        renderFieldsetForm('question');
    });
}

//function to update current question number by increments of 1
function updateQuestionNumber () {
    STORE.questionNumber++;
//    $('.questionNumber').text(questionNumber + 1);
}

//function to add one point to the current score number by increments of 1
function addOneToScore () {
    STORE.score++;
}

//Submits the user selected answer for each question and returns feedback
//will addOneToScore if correct or not if incorrect
function submitAnswer () {
  $('.js-fieldset').on('submit', '.questionAnswers', function(event) {
    event.preventDefault();
    let correct = STORE.questions[STORE.questionNumber].correctAnswer;
    let selectedAnswer = $('input[name=answer]:checked').val();
    if (!selectedAnswer) {
      alert('Choose an option!');
      return;
    }
    if (STORE.questions[STORE.questionNumber].answers[selectedAnswer] === correct) {
      addOneToScore();
      console.log('Answer is correct');
      renderFieldsetForm ('correctAnswer');
    }
    else {
      console.log('Answer is incorrect');
      (renderFieldsetForm ('incorrectAnswer'));
    }
    updateQuestionNumber();
  });
}

//moves to the next question when user clicks 'next' button
function nextQuestion () {}

// Restarts the quiz from the beginning, clearing variables and refreshing only
// the question area on the page
function restartQuiz () {}

//resets question number and quiz score
function resetScores () {}

//runs the required functions
function generateQuiz () {
    initializeQuiz();    
    startQuiz();
    submitAnswer();
    nextQuestion();
    restartQuiz();
}

$(generateQuiz);
