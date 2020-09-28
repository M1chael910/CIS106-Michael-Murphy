// This program prompts the user for their age in years and calculates and prints their age in months, days, hours and seconds
function main() { 
    var age = getAge();
    var ageInMonths = calculateAgeInMonths(age);
    var ageInDays = calculateAgeInDays(age);
    var ageInHours = calculateAgeInHours(age);
    var ageInSeconds = calculateAgeInSeconds(age);
    outputAge(age,ageInMonths,ageInDays,ageInHours,ageInSeconds);
}
main();

function getAge() { 
    var ageInYears = input("Enter Age in years");
    return ageInYears;
}

function calculateAgeInMonths(age) { 
    var ageInMonths = age * 12;
    return ageInMonths;
}
function calculateAgeInDays(age) { 
    var ageInDays = age * 365;
    return ageInDays;
}
function calculateAgeInHours(age) { 
    var ageInHours = age * 8760;
    return ageInHours;
}
function calculateAgeInSeconds(age) { 
    var ageInSeconds = age * 31557600;
    return ageInSeconds;
}

function outputAge(ageInYears,ageInMonths,ageInDays,ageInHours,ageInSeconds) { 
    output(ageInYears + " years is " + ageInMonths + " months," + ageInDays + " days, " + ageInHours + " hours, and " + ageInSeconds + " seconds");
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
