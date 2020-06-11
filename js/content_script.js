(function() {
    var script = document.createElement('script');
    var codeFunc = function(){
    	delete navigator.__proto__.getBattery;
    	var thisScript = document.currentScript;
    	thisScript.parentNode.removeChild(thisScript);
	};
    script.textContent = '(' + codeFunc.toString() + ')()';
    (document.head || document.documentElement).appendChild(script);
})()
