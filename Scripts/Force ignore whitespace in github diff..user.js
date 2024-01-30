// ==UserScript==
// @name         Force ignore whitespace in github diff.
// @namespace    http://example.com
// @version      1.0
// @description  Adds parameters to GitHub URLs containing '/files'.
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(function () {
    function addParameters() {
        const parameters = "diff=split&w=1";
        if (window.location.href.includes("/files") && !window.location.href.includes(parameters)) {
            const newURL = window.location.href.replace("/files", "/files?" + parameters);
            if(window.location.href !== newURL){
            window.location.href = newURL;
            }
        }

        //This needs more work, as it sometimes adds whitespace diff when parameters already exist
        if(window.location.href.includes("/compare/") && !window.location.href.includes(parameters)){
            const queryPrefix = window.location.href.includes("?expand=1") ? "&" : "?"
            const newURL = window.location.href += queryPrefix + parameters;
            if(window.location.href !== newURL){
            window.location.href = newURL;
            }
        }
    }

    setInterval(addParameters, 2000);
})();