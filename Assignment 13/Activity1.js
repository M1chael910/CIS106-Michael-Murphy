// This program asks the user to enter their first and last name. It then 
// uses string methods to convert the name to Lastname, FirstNameInitial, 
// and prints the updated name to the console.

main();
function main() { 
    var name = getName();
    var updatedName = updateName(name);
    output(updatedName);
}

function getName() { 
    var name = input("Enter your first and last name");
    return name.trim();
}

function updateName(name) { 
    var indexOfSpace = name.indexOf(" ");
    var lastName = name.substring(indexOfSpace, name.length);
    var firstName = name.substring(0,indexOfSpace);
    var initialOfFirstName = firstName.substring(0,1); 
    var updatedName = lastName + ", " + initialOfFirstName.toUpperCase() + ". "
    return updatedName;
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