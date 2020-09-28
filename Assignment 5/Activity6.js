function main() {
    var length = inputLengthOfRoom();
    var width = inputWidthOfRoom();
    var height = inputHeightOfRoom();
    var priceOfGallonOfPaint = inputPriceOfPaint();
    var numberOfFeetGallonOfPaintCovers = inputSqaureFeetThatGallonCovers();
    var areaOfFourWalls = calculateAreaOfFourWalls(length, width, height);
    var numberOfGallons = calculateNumberOfGallons(areaOfFourWalls, numberOfFeetGallonOfPaintCovers);
    var totalCostOfPaint = calculateTotalCost(numberOfGallons, priceOfGallonOfPaint);
    outputTotalCost(totalCostOfPaint);
}

function calculateAreaOfFourWalls(length, width, height) {
    var area = 2 * length * height + 2 * width * height;
    return area;
}

function calculateNumberOfGallons(totalArea, squareFeetPerGallon) {
    var numberOfGallons;
    
    numberOfGallons = totalArea / squareFeetPerGallon;
    
    return numberOfGallons;
}

function calculateTotalCost(gallons, pricePerGallon) {
    var totalCost;
    
    totalCost = Math.round(gallons) * pricePerGallon;
    
    return totalCost;
}

function inputHeightOfRoom() {
    var height = input("Enter height of room");
    return height;
}

function inputLengthOfRoom() {
    var length = input("Enter length of room");
    return length;
}

function inputPriceOfPaint() {
    var priceOfPaint = input("Enter price of paint")
    return priceOfPaint;
}

function inputSqaureFeetThatGallonCovers() {
    var squareFeetPerGallon = input("Enter the amount of square feet a gallon of paint will cover.")
    return squareFeetPerGallon;
}

function inputWidthOfRoom() {
    var width = input("Enter width of room")
    return width;
}

function outputTotalCost(totalCost) {
    output("Your total cost for paint is " + totalCost + " Dollars")
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
