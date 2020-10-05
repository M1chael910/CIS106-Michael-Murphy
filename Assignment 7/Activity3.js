function main() { 

    
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