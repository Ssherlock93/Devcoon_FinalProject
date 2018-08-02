if (localStorage.settingAnswers > 0){
  var parsingLocalStorage =  JSON.parse(localStorage.settingAnswers);
  document.getElementById('resultsDisplayer').innerHTML ='<h3>You got ' + parsingLocalStorage + ' questions correct</h3>';
}

if (localStorage.settingWrong){
  var parsingLocalStorageWrong = JSON.parse(localStorage.settingWrong);
  var doesThisShowUp = document.getElementById('resultsDisplayer');
  doesThisShowUp.innerHTML += '<h3 id ="results">These are the questions you should study:</h3>';

  for (var str of parsingLocalStorageWrong) {
    doesThisShowUp.innerHTML += '<li id ="questionsWrong">' + str + '</li>';
  }
}