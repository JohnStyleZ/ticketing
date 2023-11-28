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
      let _0x170355 = document.createElement("button");
      _0x170355.innerHTML = "\u81EA\u52D5\u63C0\u4F4D";
      _0x170355.className = "btn btn-outline-primary";
      _0x170355.id = "test";
      document.getElementsByClassName("discount")[0x0].append(_0x170355);
      async function _0x213877() {
        console.log("\u958B\u59CB\u81EA\u52D5\u63C0\u4F4D");
        let _0x73f50 = document.getElementById("ticketType0").value;
        if (_0x73f50 === "0") {
          alert("\u4F60\u672A\u63C0\u8CB7\u5E7E\u591A\u5F35!!!");
        } else {
          while (true) {
            document.getElementsByClassName("purchase-btn")[0x0].click();
            await _0x542fc9(0x1f4);
          }
        }
      }
      function _0x15eb4e() {
        document.getElementById("test").addEventListener("click", function () {
          _0x213877();
        });
      }
      _0x15eb4e();
    }
    // Create and append the banner element
    var bannerElement = document.createElement('div');
    bannerElement.style.cssText = 'position: fixed; bottom: 0; left: 0; width: 100%; background-color: #ff0000; color: black; padding: 10px; text-align: center; font-size: 16px;';
    document.body.appendChild(bannerElement);
})();
