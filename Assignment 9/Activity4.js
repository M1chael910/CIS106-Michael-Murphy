// This program asks the user for the amount of hours they worked this week, 
// how much they get paid per hour, calculates if they worked overtime or not, 
// and calculates their gross pay and adds the occording pay for the emount of
// overtime hours they worked, if they worked any.
main();

function main() {
    var hours = getHours();
    var rateOfPay = getRatePerHour();
    if (hours >= 40) {
        var grossPayWithOvertime = calculateGrossPayWithOvertime(hours, rateOfPay);
        output("Your gross pay with overtime is " + grossPayWithOvertime + " dollars including overtime.")
    } else {
        var regPay = calculateRegPay(hours, rateOfPay);
        output("Your gross pay is " + regPay + " dollars with no overtime.")
    }
}

function getHours() {
    var hours = input("Enter hours worked this week");
    if (hours <=0) { 
        hours = input("Enter a valid number of hours worked");
    }  
        return hours;
}

function getRatePerHour() {
    var rateOfPay = input("Enter rate per hour");
    if (rateOfPay<= 0) { 
        rateOfPay = input("Enter a valid rate per hour");
    }
    return rateOfPay;        
}


function calculateRegPay(hours, rateOfPay) {
    var grossPay = hours * rateOfPay;
    return grossPay;
}

function calculateGrossPayWithOvertime(hours, rateOfPay) {
    var regPay = 40 * rateOfPay;
    var overtimePay = ((hours - 40) * (rateOfPay * 1.5));
    var grossOvertimePay = regPay + overtimePay;
    return grossOvertimePay;
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