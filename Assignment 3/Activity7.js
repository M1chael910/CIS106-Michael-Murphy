function main() {
    // This program prompts the user for the name of their dog and its age in human years and the program calculates and displays the age of the dog in dog years.
    var dogAgeInDogYears;
    
    window.alert("Enter The Name of Your dog");
    dogName = window.prompt('Enter a value for dogName');
    window.alert("Enter how old your dog is in human years");
    dogAgeInHumanYears = window.prompt('Enter a value for dogAgeInHumanYears');
    dogAgeInDogYears = dogAgeInHumanYears / 7;
    // window.alert(Expression);
}
