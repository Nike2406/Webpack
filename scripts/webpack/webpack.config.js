// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');

const delay = (timeout = 1000) => {
  new Promise(resolve => setTimeout(resolve, timeout));
};

const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// Добавляем модуль path для отработки аутпута
const path = require('path');

// Constants 
const {
  BUILD_DIRECTORY, 
  SOURCE_DIRECTORY, 
  PROJECT_ROOT
} = require('./constants');

// Clean options to use
const cleanOptions = {
  verbose: true,
  root: PROJECT_ROOT
};

/*
* Тпиы конфигов вебпака:
* Object
* Function
* Promise
*/ 

// Futeure some code
module.exports = () => {
  return {    
    entry: SOURCE_DIRECTORY,
    output: {
      path: BUILD_DIRECTORY
    },
    mode: 'none',
    devtool: false,
    plugins: [
      // Каждый плагин - это конструктор
      new HtmlWebpackPlugin({
        template: './static/template.html',
        title: 'Изучаем webpack!'
      }),
      new CleanWebpackPlugin(
        [BUILD_DIRECTORY],
        cleanOptions // Симуляия удаления файлов с выводом в консоль  
      )
    ]
  };
};