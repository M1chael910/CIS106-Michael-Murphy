//This program asks the user for a distance in miles, 
// asks if the user wants it in US units or in metric units 
// and calculates and prints the miles in yards, feet and inches or
// kilometers, meters , and inches
main();

function main() {
    var distanceInMiles = getDistance();
    var choice = getChoice();
    if (choice == "U" || choice == "u") {
        var yards = calculateYards(distanceInMiles);
        var feet = calculateFeet(distanceInMiles);
        var inches = calculateInches(distanceInMiles);
        output("Your distance in miles is " + yards + " in yards, " +
            feet + " in feet, " + inches + " in inches");
    } else {
        var kilometers = calculateKilometers(distanceInMiles)
        var meters = calculateMeters(distanceInMiles)
        var centimeters = calculateCentimeters(distanceInMiles)
        output("Your distance in miles is " + kilometers + " in kilometers, " +
            meters + " in meters, " + centimeters + " in centimeters");
    }
}

function getDistance() {
    var hours = input("Enter hours worked this week");
    return hours;
}

function getChoice() {
    var choice = input("Enter U for US measurements, or enter M for metric measurements");
    return choice;
}

function calculateKilometers(distance) {
    var kilometers = distance * 1.60934;
    return kilometers;
}

function calculateMeters(distance) {
    var meters = distance * 1609.34;
    return meters;
}

function calculateCentimeters(distance) {
    var centimeters = distance * 160934
    return centimeters;
}

function calculateYards(distance) {
    var yards = distance * 1760
    return yards;
}

function calculateFeet(distance) {
    var feet = distance * 5280;
    return feet;
}

function calculateInches(distance) {
    var inches = distance * 63360;
    return inches;
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
