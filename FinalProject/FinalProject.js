

main();
function main() { 
    var fileDataString = loadFileData();
    var commonNamesArray = createCommonNamesArray(fileDataString);
    var botanicalNameArray = createBotanicalNamesArray();
    output(commonNamesArray);
}

function loadFileData() {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    let fileUrl = "https://www.w3schools.com/xml/plant_catalog.xml";
    var request = new XMLHttpRequest();
    
    request.open("GET", fileUrl, false);
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

function createCommonNamesArray(xmlText) {;
    var commonNames = [];
    var lines = xmlText.split("\n");
    // 288
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
    // 288
    for (var i = 2; i < lines.length - 2; i++) { 
        var line = lines[i];
        if (line.includes("<BOTANICAL>")) { 
            var botanicalName = removeTags(line);
            botanicalNames.push(botanicalName);
        }
    }
    return commonNames;
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