// Bookmarklets
//(function()%20{ var%20regularExpression%20=%20/\/([^\s\/]+)/g, match%20=%20regularExpression.exec(window.location), c%20=%20match[1], d%20=%20window.open("https://www.google.com/bookmarks/mark?op=edit&output=popup&bkmk="%20+%20document.location%20+%20"&title="%20+%20c,%20"bkmk_popup",%20"left="%20+%20((window.screenX%20||%20window.screenLeft)%20+%2010)%20+%20",top="%20+%20((window.screenY%20||%20window.screenTop)%20+%2010)%20+%20",height=510px,width=550px,resizable=1,alwaysRaised=1"); %20%20%20%20window.setTimeout(function()%20{%20d.focus()%20},%20300) })();

// Javascript
(function() {
    var regularExpression = /\/([^\s\/]+)/g,
        match = regularExpression.exec(window.location),
        c = match[1],
        d = window.open("https://www.google.com/bookmarks/mark?op=edit&output=popup&bkmk=" + document.location + "&title=" + c, "bkmk_popup", "left=" + ((window.screenX || window.screenLeft) + 10) + ",top=" + ((window.screenY || window.screenTop) + 10) + ",height=510px,width=550px,resizable=1,alwaysRaised=1");
    window.setTimeout(function() { d.focus() }, 300)
})();
