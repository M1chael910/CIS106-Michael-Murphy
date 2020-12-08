

main();
function main() { 
    loadFileData();
}

function loadFileData() {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    let fileUrl = "https://www.w3schools.com/xml/plant_catalog.xml";
    var req = new XMLHttpRequest();
    
    req.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        parseData(this.responseText);
      }
    };
    req.open("GET", fileUrl, true);
    req.send();
}

function createArrays(xmlText) {;
    var lines = xmlText.split("\n");
    // 288
    for (var i = 2; i < lines.length - 2; i++) { 
        var line = lines[i];
        if (line.includes("<COMMON>")) { 
            var 
        }
        output(lines[i]);
    }
    output(lines.length);
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