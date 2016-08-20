// Javascript
var regularExpression = /\/([^\s\/]+)/g,
    match = regularExpression.exec(window.location),
    site = match[1];
var selObj = window.getSelection();
var selRange = selObj.getRangeAt(0);
window.open("https://encrypted.google.com/search?q=site:" + site + " " + searchString + encodeURIComponent(" ") + "", '_blank');

//Bookmarklets

javascript:%20var%20regularExpression%20=%20/\/([^\s\/]+)/g,%20match%20=%20regularExpression.exec(window.location),%20site%20=%20match[1];%20var%20selObj%20=%20window.getSelection();%20var%20selRange%20=%20selObj.getRangeAt(0);%20window.open("https://encrypted.google.com/search?q=site:"%20+%20site%20+%20"%20"%20+%20searchString%20+%20encodeURIComponent(" ")%20+%20"",%20'_blank');
