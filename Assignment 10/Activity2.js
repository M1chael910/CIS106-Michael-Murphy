// This program asks the user for the amount of scores they want to enter,
// then asks the user for that amount of scores and calculates the average
// and prints it.
main();

function main() {
    var numberOfScores = input("Enter how many scores you would like to enter");
    var totalScores = getTotalScores(numberOfScores);
    output(totalScores);
    var average = calculateAverage(totalScores, numberOfScores)
    output("The average of your test scores is " + average + "%.");
}

function calculateAverage(totalScores, numberOfScores) {
    var average = totalScores / numberOfScores;
    return average;
}

function getTotalScores(numberOfScores) {
    var addedScores = 0;
    var scores = numberOfScores;

    for(;scores>0; scores--) { 
        var score = Number(input("Enter a score"));
        addedScores = addedScores + score;
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