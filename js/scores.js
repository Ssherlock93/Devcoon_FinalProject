function displayResults() {
  for (var i = 0, j = results.length; i < j; i++) {
    results += '<li>'+results[i]+'</li>';
  }
  document.getElementById('results').innerHTML = results;
}
displayResults();