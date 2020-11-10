// This program asks the user for the amount of scores they want to enter,
// then asks the user for that amount of scores and calculates the average
// and prints it. After the scores are printed, the program asks the user
// if they would like to continue, and repeats the program if the user enters 
// all positive values, 

main();

function main() {
    do { 
        var numberOfScores = input("Enter how many scores you would like to enter");
        var scores = getScores(numberOfScores)
        var totalScores = getTotalScores(scores);
        var average = calculateAverage(totalScores, numberOfScores);
        var min = calculateMax(scores);
        var max = calculateMin(scores);
        output("The average of your test scores is " + average + 
        "%. The minimum is "+ min + " , and the maximum is "+ max + ".");
    } while (numberOfScores > 0);
}

function calculateAverage(totalScores, numberOfScores) {
    var average = totalScores / numberOfScores;
    return average;
}
function calculateMax(scores) {
    var max = scores[0];
    for (var i = 0; i < scores.length; i++) {
        if (max > scores[i]) {
            max = scores[i];
        }
    }
    return max;
}
function calculateMin(scores) {
    var min = scores[0];
    for (var i = 1; i < scores.length; i++) {
            if (min < scores[i]) { 
                min = scores[i];
        }
    }
    return min;
}
    
function getScores(numberOfScores) { 
    var scores = [];
    for(var index = 0 ;index<numberOfScores; index++) { 
        var score = Number(input("Enter a score"));
            scores.push(score);
    }
    return scores; 
}
function getTotalScores(scores) {
    var scoresArray = scores;
    var addedScores = 0;

    for (var index = 0; index < scoresArray.length; index++) {
        addedScores += scoresArray[index];
    }
    return addedScores;
}

function input(text) {
    if (typeof window === 'object') {
        return prompt(text)
    } else if (typeof console === 'object') {
        const rls = require('readline-sync');
        var value = rls.question(text);
        return value;
    } else {
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
    } else if (typeof console === 'object') {
        console.log(text);
    } else {
        print(text);
    }
}