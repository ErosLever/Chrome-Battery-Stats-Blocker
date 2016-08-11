(function() {
    var s = document.createElement('script');
    s.textContent = "navigator.getBattery = undefined;document.currentScript.removeChild(document.currentScript);";
    (document.head || document.documentElement).appendChild(s);
})()
