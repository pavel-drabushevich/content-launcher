'use strict';

var ipc = require('ipc');
var remote = require('remote');
var Tray = remote.require('tray');
var Menu = remote.require('menu');
var path = require('path');

var closeEl = document.querySelector('.close');
closeEl.addEventListener('click', function () {
    ipc.send('close-main-window');
});

var categories = document.querySelector('.i-role-categories');
var categoryEl = document.querySelector('.i-role-category');
var categoryContent = document.querySelector('.i-role-category-content');
categoryEl.addEventListener('click', function (e) {
  categories.style.display = "none";
});
