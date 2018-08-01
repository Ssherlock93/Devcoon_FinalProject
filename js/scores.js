if (localStorage.settingAnswers > 0){
  var parsingLocalStorage =  JSON.parse(localStorage.settingAnswers);
  var doesThisWork = document.getElementById('resultsDisplayer').innerHTML ='<h2>You got ' + parsingLocalStorage + 'questions correct</h2>';
}
