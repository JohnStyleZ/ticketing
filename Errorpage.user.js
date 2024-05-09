// ==UserScript==
// @name         Reload Page on Error
// @version      1.0
// @author       JohnStyleZ
// @namespace    https://your.namespace.com
// @match        https://*.hkticketing.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==
(function() {
    'use strict';

    // Function to check the page's server response status
    function checkServerStatus() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (this.status !== 200) {
                    // Redirect using window.location.replace() method
                    window.location.replace("https://queue.hkticketing.com/hotshow.html");
                }
            }
        };
        // Send a HEAD request to the current page
        xhttp.open("HEAD", window.location.href, true);
        xhttp.send();
    }

    // Check for server status periodically
    setInterval(checkServerStatus, 5000); // Check every 5 seconds
})();
