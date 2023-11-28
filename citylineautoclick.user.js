// ==UserScript==
// @name         autoclicktry2
// @version      1.0
// @author       JohnStyleZ
// @namespace    https://your.namespace.com
// @match        https://*.cityline.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // Function to click a button by ID
    function clickButtonById(buttonId) {
        var button = document.getElementById(buttonId);
        if (button) {
            button.click();
        }
    }

    // Function to check if the 'buyTicketBtn' button is available
    function isBuyTicketBtnAvailable() {
        var buyTicketBtn = document.getElementById('buyTicketBtn');
        return buyTicketBtn !== null;
    }

    // Function to update the banner text
    function updateBannerText(text) {
        bannerElement.textContent = text;
    }

    // Click the 'btn-retry-en-1' button every 4 seconds
    setInterval(function() {
        clickButtonById('btn-retry-en-1');
    }, 2500); // 4 seconds

    // Check and click the 'buyTicketBtn' button every second
    var remainingTime = 3; // Initial value in seconds
    var buyTicketBtnInterval = setInterval(function() {
        if (isBuyTicketBtnAvailable()) {
            clickButtonById('buyTicketBtn');
            clearInterval(buyTicketBtnInterval); // Clear the interval after clicking
        }
        updateBannerText('Remaining time: ' + remainingTime + ' seconds');
        remainingTime--;
        if (remainingTime < 0) {
            clearInterval(buyTicketBtnInterval);
            updateBannerText('Interval completed');
        }
    }, 1000); // 1 second
    if (window.location.href.includes("/performance?")) {
        let button = document.createElement("button");
        button.innerHTML = "自動提位";
        button.className = "btn btn-outline-primary";
        button.id = "test";
        document.getElementsByClassName("discount")[0].append(button);

        async function autoPurchase() {
            console.log("開始自動提位");
            let ticketTypeElement = document.getElementById("ticketType0");

            if (!ticketTypeElement) {
                console.error("Ticket type element not found!");
                return;
            }

            let ticketType = ticketTypeElement.value;
            console.log(ticketType);

            if (ticketType === "0") {
                alert("你未提買幾多張!!!");
            } else {
                while (true) {
                    document.getElementsByClassName("purchase-btn")[0].click();
                    await new Promise(resolve => setTimeout(resolve, 500));
                }
            }
        }

        function addClickListener() {
            document.getElementById("test").addEventListener("click", function () {
                autoPurchase();
            });
        }

        addClickListener();
    }

    // Create and append the banner element
    var bannerElement = document.createElement('div');
    bannerElement.style.cssText = 'position: fixed; bottom: 0; left: 0; width: 100%; background-color: #ff0000; color: black; padding: 10px; text-align: center; font-size: 16px;';
    document.body.appendChild(bannerElement);
})();
