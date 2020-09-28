// Asks user for the length and width of their room, calculates the area of the room in Square Yards, and prints it.

main()

function main() {
    var length = inputLength();
    var width = inputWidth();
    var areaOfRoom = calculateAreaOfRoom(length, width);
    outputAreaOfRoom(areaOfRoom);
}

function inputLength() {
    var length = input("Enter length of room in feet")
    return length;
}

function inputWidth() {
    var width = input("Enter width of room in feet")
    return width;
}

function calculateAreaOfRoom(width, length) {
    var areaOfRoom =(width * length) / 9;
    return areaOfRoom;
}

function outputAreaOfRoom(areaOfRoom) {
    output("The area of your room in square yards is " + areaOfRoom+ ".")
    
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

