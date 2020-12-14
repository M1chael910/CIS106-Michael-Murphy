const { userInfo } = require("os");


main();
function main() { 
    let fileUrl = "https://www.w3schools.com/xml/plant_catalog.xml";
    var fileDataString = loadFileDataFromUrl(fileUrl);
    var commonNamesArray = createCommonNamesArray(fileDataString);
    var botanicalNameArray = createBotanicalNamesArray(fileDataString);
    var zoneArray = createZoneArray(fileDataString);
    var lightArray = createlightArray(fileDataString);
    var priceArray = createPriceArray(fileDataString);
    outputPlantData(commonNamesArray, botanicalNameArray, zoneArray, lightArray, priceArray);
}

function outputPlantData(commonNames, botanicalNames, zones, lightArray, prices) { 
    for (i = 0; i < commonNames.length; i++) { 
        var commonName = commonNames[i].trim();
        var botanicalName = botanicalNames[i].trim();
        var zone = zones[i].trim();
        var light = lightArray[i].trim();
        var price = prices[i].trim();
        var outputString = `${commonName}(${botanicalName}) - ${zone} - ${light} - ${price}`;
        console.log(outputString);1
    }
}

function loadFileDataFromUrl(url) {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var request = new XMLHttpRequest();
    request.onerror = function() { 
        console.log("Failed to fetch file");
    }
    request.open("GET", url, false);
    request.send(null);
    return request.responseText;
}

function removeTags(line)
{
   if ((line===null) || (line===''))
       return false;
  else
  return line.replace(/<[^>]*>/g, '');
}

function createCommonNamesArray(xmlText) {
    var commonNames = [];
    var lines = xmlText.split("\n");
    for (var i = 2; i < lines.length - 2; i++) { 
        var line = lines[i];
        if (line.includes("<COMMON>")) { 
            var commonName = removeTags(line);
            commonNames.push(commonName);
        }
    }
    return commonNames;
}

function createBotanicalNamesArray(xmlText) {;
    var botanicalNames = [];
    var lines = xmlText.split("\n");
    for (var i = 2; i < lines.length - 2; i++) { 
        var line = lines[i];
        if (line.includes("<BOTANICAL>")) { 
            var botanicalName = removeTags(line);
            botanicalNames.push(botanicalName);
        }
    }
    return botanicalNames;
}

function createZoneArray(xmlText) {;
    var zones = [];
    var lines = xmlText.split("\n");
    for (var i = 2; i < lines.length - 2; i++) { 
        var line = lines[i];
        if (line.includes("<ZONE>")) { 
            var zone = removeTags(line);
            zones.push(zone);
        }
    }
    return zones;
}
function createlightArray(xmlText) {;
    var lightArray = [];
    var lines = xmlText.split("\n");
    for (var i = 2; i < lines.length - 2; i++) { 
        var line = lines[i];
        if (line.includes("<LIGHT>")) { 
            var light = removeTags(line);
            lightArray.push(light);
        }
    }
    return lightArray;
}

function createPriceArray(xmlText) {;
    var prices = [];
    var lines = xmlText.split("\n");
    for (var i = 2; i < lines.length - 2; i++) { 
        var line = lines[i];
        if (line.includes("<PRICE>")) { 
            var price = removeTags(line);
            prices.push(price);
        }
    }
    return prices;
}
