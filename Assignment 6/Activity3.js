// Asks the user for a distance in miles, 
// calculates and displays the distance in 
// yards, feet and inches


main();

function main() {

	var DistanceInMiles = getDistanceInMiles();

	var DistanceInYards = calculateDistanceInYards(DistanceInMiles);
	var DistanceInFeet = calculateDistanceInFeet(DistanceInMiles);
	var DistanceInInches = calculateDistanceInInches(DistanceInMiles);

	outputDistances(DistanceInYards, DistanceInFeet, DistanceInInches);
}


function getDistanceInMiles() {
	var miles = input("Enter distance in miles:");
	return miles;
}

function calculateDistanceInYards(distance) {
	var distanceInYards = distance * 1760;
	return distanceInYards;
}

function calculateDistanceInFeet(distance) {
	var distanceInFeet = distance * 5280;
	return distanceInFeet;
}

function calculateDistanceInInches(distance) {
	var distanceInInches = distance * 63360;
	return distanceInInches;
}

function outputDistances(yards, feet, inches) {
  output("The distance you entered is " +
  yards + " in yards, " + feet + 
 "in feet, and " +
  inches + " in inches");
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
