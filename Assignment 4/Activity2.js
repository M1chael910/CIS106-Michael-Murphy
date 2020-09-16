// This program prompts the user for their age in years and calculates and prints their age in months, days, hours and seconds


var ageInYears = input("Enter Age in years");
var ageInMonths = ageInYears * 12;
var ageInDays = ageInYears * 365;
var ageInHours = ageInYears * 8760;
var ageInSeconds = ageInYears * 31557600;
output(ageInYears + " years is " + ageInMonths + " months," + ageInDays + " days, " + ageInHours + " hours, and " + ageInSeconds + " seconds");

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
