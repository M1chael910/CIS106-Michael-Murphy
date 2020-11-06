// Defined-Value Array activity 1
// This program asks the user for a year, and calculates if that year is a leap year, 
// and prints the results. It then asks the user for a numeric value for a month, 
// and prints the name of the month and the amount of days in that month.
// 
main();

function main() { 
    var year = getYear();
    var daysInEachMonth = [31,29,31,30,31,30,31,31,30,31,30,31]
    var namesOfEachMonth = ["January", "February", "March"
    , "April", "May", "June", "July","August", 
    "September", "October","November","December"]
    var isLeapYear = calculateLeapYear(year);
    outputLeapYear(isLeapYear);
    do{ 
        var month = getMonth();
        calculateMonthAndDays(month, daysInEachMonth, namesOfEachMonth);
    }while(month >= 1 && month <= 12) 
}

function calculateLeapYear(year) { 
    var leapYear = false;
    if (year % 4 == 0 || year % 400 == 0) { 
        if (year % 100 == 0) { 
            leapYear = false;
        } else { 
            leapYear = true;
        }
    }
    return leapYear;
} 

function calculateMonthAndDays(month, daysInEachMonth, namesOfEachMonth) { 
    var amountOfDaysInMonth = daysInEachMonth[month-1];
    var nameOfMonth = namesOfEachMonth[month-1];
    output(nameOfMonth + " : "+ amountOfDaysInMonth + " days.");
}
function getMonth() { 
    var month = input("Enter a value for a month");
    return month;
}

function getYear() { 
    var year = input("Enter a year");
    return year
}
function outputLeapYear(leapYear) {
    if (leapYear == true) { 
        output("This year is a leap year")
    } else { 
        output("This year is not a leap year")
    }

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