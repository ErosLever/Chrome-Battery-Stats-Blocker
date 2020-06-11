(function() {
    var s = document.createElement('script');
    s.textContent = "delete navigator.getBattery;document.currentScript.removeChild(document.currentScript);";
    (document.head || document.documentElement).appendChild(s);
})()
