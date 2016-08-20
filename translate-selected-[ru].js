// Bookmarklets
// javascript:var%20selObj%20=%20window.getSelection();%20var%20selRange%20=%20selObj.getRangeAt(0);%20window.open("https://translate.google.com/#auto/ru/"%20+%20selRange%20+%20"",%20'_blank');

// Javascript
var selObj = window.getSelection();
var selRange = selObj.getRangeAt(0);
window.open("https://translate.google.com/#auto/ru/" + selRange + "", '_blank');
