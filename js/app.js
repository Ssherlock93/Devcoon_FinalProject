'use strict';
// declare the variables. position = 0 is the default position starting the quiz, and will ++ as the test progresses
// increasing as the array is looped through.
var position = 0, question, choice, choices, choiceA, choiceB, choiceC, correctAnswer = 0, totalCorrectAnswers = [], trackingQuestionsThatWereWrong = [];

var localStorageSetter = function () {
  var stringer = JSON.stringify(totalCorrectAnswers.length);
  localStorage.setItem('settingAnswers', stringer);
};
var localStorageForWrong = function () {
  var stringifyWrong = JSON.stringify(trackingQuestionsThatWereWrong);
  localStorage.setItem('settingWrong', stringifyWrong);
};
// questions array is stored in the questions.js file. It is mutidimensional (array of arrays). We will loop through
// that to get the current question and check the answers based on the final position of the array [4].
//this will display the questions on the page. It will create and fill an h2 with some information.
function displayQuestion() {
  // if position is less than or = to the length of the question array, display the final tally message.
  if (position >= questions.length) {

    document.getElementById('quiz').innerHTML = '<h2>You got ' + correctAnswer + ' of ' + questions.length + ' questions correct</h2>';
    document.getElementById('status').innerHTML = 'Test Finished';
    // this will restart the quiz to allow for another attempt.
    position = 0;
    // this will reset the score back to 0.
    correctAnswer = 0;
    // this will stop the displayQuestion function when the quiz is completed.
    return false;
  }
  // shows the user where they are in the quiz. Question 1 of 10 for example.
  document.getElementById('status').innerHTML = 'Question ' + (position + 1) + ' of ' + questions.length;

  // we're getting into the weeds now. Position 0 is the actual question in the array
  question = questions[position][0];

  // choiceA is position 1 in the questions array for the current question. This repeats for
  // b and c as well.
  choiceA = questions[position][1];
  choiceB = questions[position][2];
  choiceC = questions[position][3];

  // create an <h3> tag with the current question number (so fancy).
  document.getElementById('quiz').innerHTML = '<h3>' + question + '</h3>';

  // let's add some inputs and submit button to the <h3> we created just above.
  document.getElementById('quiz').innerHTML += '<input type="radio" name="choices" value="A">' + choiceA + '<br>';
  document.getElementById('quiz').innerHTML += '<input type="radio" name="choices" value="B">' + choiceB + '<br>';
  document.getElementById('quiz').innerHTML += '<input type="radio" name="choices" value="C">' + choiceC + '<br><br>';

  // now that that is done, let's make our submit button and give it the onclick function.
  // quiz.innerHTML += '<button onclick=\'checkAnswer()\'>Submit</button>';
  document.getElementById('quiz').innerHTML += '<button type="submit">Submit</button>';
}

// add an event listener for the click o the submit button we created.
document.getElementById('quiz').addEventListener('submit', checkAnswer);

// let's create the answer checking function.
function checkAnswer(e) {
  e.preventDefault();
  choices = document.getElementsByName('choices');
  for (var i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      choice = choices[i].value;
    }
  }

  // checking to see if the users choice === position [4].
  if (choice === questions[position][4]) {
    // give them a big hand and increase the score!
    correctAnswer++;
    totalCorrectAnswers.push(correctAnswer);
    localStorageSetter();
  } else if (choice !== questions[position][4]) {
    trackingQuestionsThatWereWrong.push(questions[position][0]);
    localStorageForWrong();

  }

  // this will increment the position in the array, changing the question that the
  // user sees.
  position++;

  // this will redirect the user to the results page if the quiz is done
  if (position === questions.length) {
    window.location.href = 'scores.html';
  }
  // now we need to display that next question, so we displayQuestion() again.
  displayQuestion();

}
// and the event listener to make it all come together.
window.addEventListener('load', displayQuestion, false);