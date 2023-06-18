// ==UserScript==
// @name         TKBot
// @version      usable
// @description  Ticketing
// @author       John Wu
// @license      MIT
// @run-at       document-idle
// @match        *://*.hkticketing.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hkticketing.com
// ==/UserScript==

;(function () {
  'use strict'
  const _0x268bb1 = 'JERLP0723',
    _0x20407a = async () => {
      const _0x8574a0 = await fetch(
        'https://worldtimeapi.org/api/timezone/Asia/Hong_Kong'
      ).then((_0x15cbfb) => _0x15cbfb.json())
      return _0x8574a0
    }
  function _0x172c8e() {
    var _0x4160ee = document.querySelector('.inner-content')
    if (_0x4160ee) {
      var _0x5500ea = document.createElement('h1')
      _0x5500ea.textContent = '~~John Wu 已經破解了,見此句即BOT正常運作中 不用再問客服~~'
      _0x5500ea.style.color = 'red'
      var _0x1d997d = document.createElement('p')
      _0x1d997d.textContent = '如果直接進入event page是正常'
      var _0x3dd437 = document.createElement('p')
      _0x3dd437.textContent =
        '如開賣一天/當天在此頁面畫面不停閃 進入不到event page是正常'
      var _0x2bc7ad = document.createElement('p')
      _0x2bc7ad.textContent = '開賣時跳到白畫面或倒數到0沒反即server問題'
      _0x2bc7ad.style.color = 'red'
      _0x4160ee.prepend(_0x5500ea, _0x1d997d, _0x3dd437, _0x2bc7ad)
    }
  }
  _0x172c8e()
  function _0x5df28b() {
    var _0x435114 = window.location.href,
      _0x4ba447 = document.getElementsByClassName('eventPricingHeader')[0]
    if (_0x435114.includes('shows/show.aspx') && _0x4ba447) {
      var _0x560e6b = _0x4ba447.querySelector('h2')
      _0x560e6b &&
        ((_0x560e6b.textContent = '下一頁先有自動重試揀位'),
        _0x560e6b.style.setProperty('color', 'red', 'important'),
        _0x560e6b.style.setProperty('font-size', '25px', 'important'),
        _0x560e6b.style.setProperty('font-weight', 'bold', 'important'))
    }
  }
  _0x5df28b()
  function _0x40349f() {
    var _0x223884 = window.location.href,
      _0x54dac2 = document.getElementsByClassName('copy')[0]
    if (
      _0x223884.includes('performances') &&
      _0x223884.includes('tickets') &&
      _0x54dac2
    ) {
      var _0x39c8a0 = _0x54dac2.querySelector('h5'),
        _0x123b80 = _0x54dac2.querySelector('div > p')
      if (_0x39c8a0 && _0x123b80) {
        _0x123b80.textContent = '先揀好價位數量 再click自動重試揀位'
        _0x123b80.style.color = 'red'
        _0x123b80.style.fontSize = '25px'
        _0x123b80.style.fontWeight = 'bold'
        var _0x16eb57 = document.createElement('p')
        _0x16eb57.textContent =
          '* 如該演唱會沒有票價選擇即未開售\uFF0C請到其他演唱會測試'
        _0x16eb57.style.color = 'red'
        _0x16eb57.style.fontSize = '25px'
        _0x16eb57.style.fontWeight = 'bold'
        _0x123b80.parentNode.insertBefore(_0x16eb57, _0x123b80.nextSibling)
      }
    }
  }
  _0x40349f()
  async function _0x8d475e() {
    let _0x2d402e = window.location.href
    _0x2d402e == 'https://busy.hkticketing.com/' &&
      location.replace('https://queue.hkticketing.com/hotshow.html')
    if (
      _0x2d402e == 'https://queue.hkticketing.com/hotshow.html' ||
      _0x2d402e == 'https://busy.hkticketing.com/'
    ) {
      console.log('refresh')
      function _0x326744() {
        location.replace('http://entry-hotshow.hkticketing.com/')
      }
      setTimeout(_0x326744, 500)
    } else {
      console.log('logined')
    }
    if (_0x2d402e.match(_0x268bb1)) {
      const _0x1d3ef3 = await _0x20407a(),
        _0x429665 = new Date('2023-07-31T09:59:59')
      if (new Date(_0x1d3ef3.datetime) > _0x429665) {
        alert('match使用時間已過, 請移除!!!')
        location.replace('https://queue.hkticketing.com/hotshow.html')
        return
      }
    }
    _0x50722c('.detailModuleCopy').then((_0x1a2e31) => {
      console.log('shown')
      _0x162894()
    })
    console.log('end: 2023-07-31T09:59:59')
    var _0x4d0001 = document.createElement('font')
    _0x4d0001.setAttribute('class', 'selected')
    _0x4d0001.setAttribute('size', '5')
    _0x4d0001.innerHTML = 'Bot過期時間: 2023-07-31T09:59:59'
    var _0x4c89f5 = document.createElement('button')
    _0x4c89f5.setAttribute('class', 'redButton')
    var _0x4c43ab = document.createElement('a')
    _0x4c43ab.setAttribute('href', 'https://t.me/TechTickHK')
    _0x4c43ab.text = '客服'
    _0x4c89f5.append(_0x4c43ab)
    var _0x2d37b3 = document.createElement('button')
    _0x2d37b3.setAttribute('class', 'redButton')
    var _0x353de2 = document.createElement('a')
    _0x353de2.setAttribute('href', 'https://t.me/techtickbot_channel')
    _0x353de2.text = 'Channel'
    _0x2d37b3.append(_0x353de2)
    var _0x3416ca = document.getElementById('headerGrey')
    try {
      _0x3416ca.append(_0x4d0001)
      _0x3416ca.append(_0x4c89f5)
      _0x3416ca.append('或')
      _0x3416ca.append(_0x2d37b3)
    } catch {}
  }
  function _0x4d0442(_0x2eb2af) {
    return new Promise((_0x43f52e) => {
      setTimeout(_0x43f52e, _0x2eb2af)
    })
  }
  function _0x50722c(_0x237b73) {
    return new Promise((_0x356695) => {
      if (document.querySelector(_0x237b73)) {
        return _0x356695(document.querySelector(_0x237b73))
      }
      const _0x41507d = new MutationObserver((_0x29a119) => {
        document.querySelector(_0x237b73) &&
          (_0x356695(document.querySelector(_0x237b73)), _0x41507d.disconnect())
      })
      _0x41507d.observe(document.body, {
        childList: true,
        subtree: true,
      })
    })
  }
  function _0x162894() {
    var _0x3a4297 = $(
      '<input type="button" class="yellowGradientButton" id="test" value="自動重試揀位"/>'
    )
    $('.ticketSelectionDDLElement').append(_0x3a4297)
    $(document).on('click', '#test', _0x39fb09)
  }
  async function _0x39fb09() {
    console.log('開始自動揀位')
    let _0xca4476 = document.querySelectorAll('[type=submit]')
    while (true) {
      _0xca4476[0].click()
      console.log('揀位中')
      await _0x4d0442(500)
    }
  }
  _0x8d475e()
})()
