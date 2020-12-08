

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
      parseData(this);
      }
    };
    req.open("GET", fileUrl, true);
    req.send();
}

function parseData(xml) { 
    output(xml);
    // var x = doc.getElementsByTagName("PLANT");
    // output(x);
    // var element = doc.getElementsByTagName("PLANT");
    // output(element); 
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