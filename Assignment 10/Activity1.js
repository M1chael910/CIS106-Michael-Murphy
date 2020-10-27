//This program asks the user for a value, and the number of expressions
//to print for that value, and prints each expression to the console.
 
main();
function main() { 
    var value = getValue();
    var numberOfExpressions = getNumberOfExpressions();
    outputExpressions(numberOfExpressions,value); 
}

function outputExpressions(numberOfExpressions, value) { 
    var multiplier = 1;
    var counter = numberOfExpressions;
    for (; counter > 0; multiplier++,counter--) { 
        output(value +" * " + (multiplier) + " = "+ (value * multiplier))
    }
}

function getValue() { 
    var value = input("Enter a value");
    return value;
}
function getNumberOfExpressions() { 
    var numberOfExpressions = input("Enter how many expressions to be displayed");
    return numberOfExpressions;
}

function input(text) {
    if (typeof window === 'object') {
        return prompt(text);
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