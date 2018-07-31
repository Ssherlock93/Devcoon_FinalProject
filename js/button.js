


// following
function chooseThisAnswer() {
  var radios = document.getElementsByName('choice');
  var checked = false;
  var userAnswer;

  for (var i = 0; i < radios.length; i ++) {
    if (radios[i].checked) {
      checked = true;
      userAnswer = radios[i].value;
    }
  }

  if (!checked) {
    alert('Please, sir or maam, choose an answer, would you?');
    return;
  }

  if (userAnswer === 'first') {
    alert('you got it!');
  }

  else {
    alert('answer is wrong');
  }
}
