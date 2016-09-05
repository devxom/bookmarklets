// Bookmarklets
// javascript:var%20a%20=%20window;var%20o%20=%20window.getSelection();var%20s%20=%20o.getRangeAt(0);a.open("https://translate.google.com/#auto/ru/"%20+%20s,%20'_blank');

// Javascript
var a = window;
var o = window.getSelection();
var s = o.getRangeAt(0);
a.open("https://translate.google.com/#auto/ru/" + s, '_blank');
