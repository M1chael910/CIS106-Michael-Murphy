var distanceInMiles = input("Enter distance in miles:");
var distanceInYards = distanceInMiles * 1760;
var distanceInFeet = distanceInMiles * 5280;
var distanceInInches = distanceInMiles * 63360;
output(distanceInMiles + " miles is " + distanceInYards + " yards," + distanceInFeet + " feet, and " + distanceInInches + " inches");

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