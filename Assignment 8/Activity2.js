


main();
function main() { 
    var numberOfScores = input("Enter how many scores you would like to enter");
    var totalScores = getTotalScores(numberOfScores);
    output(totalScores);
    var average = calculateAverage(totalScores,numberOfScores)
    output("The average of your test scores is " + average + "%.");
}

function calculateAverage(totalScores, numberOfScores) { 
    var average = totalScores/numberOfScores;
    return average;
}
function getTotalScores(numberOfScores) { 
    var addedScores;
    var scores = numberOfScores;
    while (scores > 0) { 
        var score = Number(input("Enter a score"));
        addedScores = addedScores + floatScore;
        scores--;
    }
    return addedScores;
}

function input(text) {
    if (typeof window === 'object') {
      return prompt(text)
    }
    else if (typeof console === 'object') {
      const rls = require('readline-sync');
      var value = rls.question(text);
      return value;
    }
    else {
      output(text);
      var isr = new java.io.InputStreamReader(java.lang.System.in); 
      var br = new java.io.BufferedReader(isr); 
      var line = br.readLine();
      return line.trim();
    }
  }
  
  function output(text) {
    if (typeof document === 'object') {
      document.write(text);
    } 
    else if (typeof console === 'object') {
      console.log(text);
    } 
    else {
      print(text);
    }
  }