'use strict';

var $ = require('jquery');
var ipc = require('ipc');
var remote = require('remote');
var Tray = remote.require('tray');
var Menu = remote.require('menu');
var path = require('path');

$('.close').on('click', function () {
    ipc.send('close-main-window');
});

var $backButton = $('.i-role-back');
var $categories = $('.i-role-categories');
var $category = $('.i-role-category');
var $categoryContent = $('.i-role-category-content');

var showCategory = function(category) {
  $categoryContent.append('<ul><li>Урок 1</li><li>Урок 2</li></ul>');
  $categoryContent.show();
}

$category.on('click', function (e) {
  $categories.hide();
  $backButton.show();
  showCategory('test');
});

$backButton.on('click', function (e) {
  $backButton.hide();
  $categoryContent.hide();
  $categories.show();
});
