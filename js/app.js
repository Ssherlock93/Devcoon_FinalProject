'use strict';
//TODO: assign variable names
var questions = [];
var answers = [];


var FirstQuestion = {
  question: 'what number is highest?',
  options: { a: 2,
    b: 3,
    c: 4,
    d: 5,
  },
  correctAnswer: 'd',
};

// questions.push(FirstQuestion);
// console.log(FirstQuestion);


//TODO: create local storage / Delete local storage



//TODO: Array of questions
// and this will be an array of objects?

// Questions:?
// Two separate arrays... containing what? Objects? Each question with it's own this.options to choose from?






//TODO: Array of answers

// What are we imagining in our answer array? objects? Boolean true or falses? If
// index 0 is true,that means they got the first question right, otherwise boolean false.

//two arrays, the first with the question objects... and the second, with the boolean true or falses, tracking the user's answers... what is the advantage of doing it this way?

// So dan's imagining the first array with just questions, one question per index. A second array contains all options to choose from... at index [i] of array Questions, index [j] will be associated with it, so they'll be linked at the same index. But where are we locating the correct answers? If the first array is strictly questions, the second array strictly options to choose from, how are you handling the logic of checking user inputs against the options to choose and determining whether they're right?

//Yes, what Scott was saying was along the lines of my hunch, that having answer objects contain their possible options, as well as having a correct answer. So answer objects contain all their possible options as well as which one is correct?

// so starting off simply, what about having a single array with objects that contain for starters at least three properties, . question . possibilities . correct, (and possibly a . user input form)

// when the user gets to index [i] .question will display, and .possibilites will display, and a blank form for them to type. Upon submit, an if statement will check that . user choice === correct answer. If so increment score and move on.

// var firstQuestion = {
// this.question : "what's a for loop?",
// this.possible : ["it is a golf reference","it counts to 4", "it is meaningless", "it's a loop that performs a function a specified amount of times"],
// this.correct : [3];,
// this.userResponse : '';,
// ,

// checker = function ()
// if (this.userResponse === this.correct)
//     this.answer = true;
//     else {this.answer = false}
// }








//TODO: ask a random question from the questions array








//TODO: Take the input from the field (radio button)





//TODO: Compare the answer from the user to the correct answer in the associated array





//TODO: Display whether the answer is correct / incorrect (populate the answer div)





//TODO: Push completed quiz to local storage






//TODO: Populate the div on the results page




