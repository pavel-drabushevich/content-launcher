'use strict'

const $ = require('jquery')
const {shell, ipcRenderer} = require('electron')

const categoriesConfig = require('./categories.js')

$('.i-role-profguide').on('click', (e) => {
  e.preventDefault()
  shell.openExternal('http://profguide.by')
})

const $backButton = $('.i-role-back')
const $categories = $('.i-role-categories')
const $category = $('.i-role-category')
const $categoryContent = $('.i-role-category-content')

var showCategory = (category) => {
  const $items = $('.i-role-items')
  $items.empty()
  const items = categoriesConfig[category].items
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const $item = $('<li class="category-item"><span class="glyphicon glyphicon-pencil"/>' + item.name +'</li>');
    $item.on('click', () => {
      ipcRenderer.send('open-lesson', item.file)
    })
    $items.append($item)
  }
  $categoryContent.show()
}

$category.on('click', (e) => {
  $categories.hide()
  $backButton.show()
  showCategory('test')
});

$backButton.on('click', (e) => {
  $backButton.hide()
  $categoryContent.hide()
  $categories.show()
})
