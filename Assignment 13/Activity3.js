// This program prompts the user to enter a list of items seperated by commas,
// and prints each item in the list to the console on a seperate line.
main();
function main() { 
    var stringValues = getStringValues();
    var valueArray = convertStringToArray(stringValues);
    outputArray(valueArray);
}

function outputArray(array) { 
    for (var a in array) { 
        output(array[a]);
    }
}

function convertStringToArray(string) { 
    var values = string.trim();
    var arrayValues = values.split(", ");
    return arrayValues;
}

function getStringValues() { 
    var stringValues = input("Enter a list of items, people, or numbers seperated by commas.");
    // Enter a list of items, people, or numbers seperated by commas
    return stringValues;
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