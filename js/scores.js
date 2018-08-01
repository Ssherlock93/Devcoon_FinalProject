if (localStorage.settingAnswers > 0){
  var parsingLocalStorage =  JSON.parse(localStorage.settingAnswers);
  document.getElementById('resultsDisplayer').innerHTML = '<h2>You got ' + parsingLocalStorage + ' of ' + questions.length + ' questions correct</h2>';
  }

function displayResults() {
  for (var i = 0, j = results.length; i < j; i++) {
    results += '<li>'+results[i]+'</li>';
  }
  document.getElementById('results').innerHTML = results;
}
displayResults();