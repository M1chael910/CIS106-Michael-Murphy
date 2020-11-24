

main();
function main() { 
    var filename = "scores.txt";
    if (fileExists(filename)) { 
        var file = getFile(filename);
        var scoreArray = getScoreArray(file);
        output(scoreArray);
        var min = calculateMin(scoreArray);
        var max = calculateMax(scoreArray);
        var average = calculateAverage(scoreArray);
        output("The minimum is "+ min + ", the maximum is " + max + ", and the average is " + average + ".");
    } else { 
        output("File not found");
    }
}
function getFile(filename) {
    var file = require('readline').createInterface( {
      input: require('fs').createReadStream(filename)
    });
    return file
}
function getScoreArray(file) { 
    var scoreArray = []
    file.on('line', function (line) {
        var score = parseInt(line.slice(line.indexOf(",")+1,line.length));
        scoreArray.push(score);
        output(score);
    });
    return scoreArray;
}

function fileExists(filename) {
    var fs = require('fs');
    return fs.existsSync(filename);
}

function calculateAverage(scores) {
    var average = scores / scores.length;
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
