'use strict'

const $ = require('jquery')
const {shell, ipcMain} = require('electron')

var categoriesConfig = require('./categories.js');

$('.close').on('click', function () {
    ipc.send('close-main-window');
});

$('.i-role-profguide').on('click', function(e) {
  e.preventDefault();
  shell.openExternal('http://profguide.by');
});

var $backButton = $('.i-role-back');
var $categories = $('.i-role-categories');
var $category = $('.i-role-category');
var $categoryContent = $('.i-role-category-content');

var showCategory = function(category) {
  var $items = $('.i-role-items');
  $items.empty();
  var items = categoriesConfig[category].items;
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var $item = $('<li class="category-item"><span class="glyphicon glyphicon-pencil"/>' + item.name +'</li>');
    $item.on('click', function() {
      ipcMain.send('open-lesson', item.file);
    });
    $items.append($item);
  }
  $categoryContent.show();
}

$category.on('click', function (e) {
  console.log('TEST')
  $categories.hide();
  $backButton.show();
  showCategory('test');
});

$backButton.on('click', function (e) {
  $backButton.hide();
  $categoryContent.hide();
  $categories.show();
});
