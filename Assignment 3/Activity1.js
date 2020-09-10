function main() {
    // This program prompts the user for their hours and rate per hour and then calculates the monthly, weekly, and yearly pay of the user
    var weeklyPay;
    var monthlyPay;
    var yearlyPay;
    
    window.alert("Enter hourly rate");
    hourlyRate = window.prompt('Enter a value for hourlyRate');
    window.alert("Enter Hours");
    Hours = window.prompt('Enter a value for Hours');
    weeklyPay = hourlyRate * Hours;
    monthlyPay = weeklyPay * 4;
    yearlyPay = weeklyPay * 52;
    window.alert(weeklyPay.ToString() + monthlyPay + yearlyPay);
}
