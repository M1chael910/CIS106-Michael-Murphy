// This program pulls numbers out the file "scores.txt" and
// puts them in an array, and calculates and outputs the 
// minumum, maximum, and average.

main();

function main() {
    var filename = "scores.txt";
    var file = getFile(filename);
    var scoreArray = getScoreArray(file);
    output(scoreArray);
    var min = calculateMin(scoreArray);
    var max = calculateMax(scoreArray);
    var average = calculateAverage(scoreArray);
    output("The minimum is " + min + ", the maximum is " + max + ", and the average is " + average + ".");
}

function getFile(filename) {
    var fs = require('fs');
    var exists = fs.existsSync(filename);
    if (!exists) {
        output("Missing file: " + filename);
        process.exit(1);
    } else {
        var file = fs.readFileSync(filename, 'utf8');
        return file;
    }
}

function getScoreArray(file) {
    var scoreArray = [];
    var lines = file.split("\n");
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        var scoreInt = parseInt(line.slice(line.indexOf(",")+1,line.length));
        scoreArray.push(scoreInt);
    }
    return scoreArray;
}
function calculateAverage(scores) {
    var total = 0;
    for(var i = 0; i < scores.length; i++) {
        total += scores[i]; 
    }
    var average = total / scores.length;
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
function output(text) {
    if (typeof document === 'object') {
        document.write(text);
    } else if (typeof console === 'object') {
        console.log(text);
    } else {
        print(text);
    }
}

