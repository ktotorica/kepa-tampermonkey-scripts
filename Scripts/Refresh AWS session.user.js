// ==UserScript==
// @name         Refresh AWS session
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically press a series of buttons every 20 minutes on a specific URL
// @author       You
// @match        https://pcty-greenfield.awsapps.com/start*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=awsapps.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    async function clickButtonsSequentially(buttonSelectors) {
        for (let i = 0; i < buttonSelectors.length; i++) {
            const button = document.querySelector(buttonSelectors[i]);
            if (button) {
                button.click();
                // Wait for 1 second before clicking the next button
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        }
    }

    function loginToDev() {
        // List of button selectors to click in order
        const buttonSelectors = [
            '#app-03e8643328913682',
            '#ins-b029800c7704c5d7 > div > div > div > div.name',
            '#p-04aa705e1066ed90 > span > span > a',
            // Add more buttons if needed
        ];

        // Check if the third selector returns null
        const thirdButton = document.querySelector(buttonSelectors[2]);
        if (thirdButton !== null) {
            // Click only the third button if it returns null
            clickButtonsSequentially([buttonSelectors[2]]);
        } else {
            // Click all buttons sequentially if the third selector is not null
            clickButtonsSequentially(buttonSelectors);
        }
    }

    // Wait for 3 seconds before the initial call
    setTimeout(function() {
        loginToDev();
        //refresh session every X minutes
        setInterval(loginToDev, 40 * 60 * 1000);
    }, 3000);
})();