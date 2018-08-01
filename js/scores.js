if (localStorage.settingAnswers > 0){
  var parsingLocalStorage =  JSON.parse(localStorage.settingAnswers);
  var doesThisWork = document.getElementById('resultsDisplayer').innerHTML ='<h2>You got ' + parsingLocalStorage + 'questions correct</h2>';
}

for (var i = 0; i < trackingQuestionsThatWereWrong.length; i ++){
  var localStorageForWrong = function () {
    var stringifyWrong = JSON.stringify(trackingQuestionsThatWereWrong[i]);
    var settingWrong = localStorage.setItem('settingWrong', stringifyWrong);
  };
}

if (localStorage.settingWrong){
  var parsingLocalStorageWrong = JSON.parse(localStorage.settingWrong);
  var doesThisShowUp = document.getElementById('resultsDisplayer').innerHTML += '<p> these questions you should study ' + parsingLocalStorageWrong + '</p>';

}