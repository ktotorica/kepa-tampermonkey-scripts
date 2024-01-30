// ==UserScript==
// @name         Close Aws Landing Page Tab After 3 Minutes if Inactive
// @namespace    http://your-namespace.example.com
// @version      0.1
// @description  Close the current tab after 3 minutes
// @author       Your Name
// @match        https://us-east-2.console.aws.amazon.com/console/home*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
     const timeDelay = 3 * 60 * 1000;

    function closeTab() {
        window.close();
    }

    setTimeout(closeTab, timeDelay);
})();