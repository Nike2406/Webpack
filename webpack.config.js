// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');

const delay = (timeout = 1000) => {
  new Promise(resolve => setTimeout(resolve, timeout));
};

/*
* Тпиы конфигов вебпака:
* Object
* Function
* Promise
*/ 

module.exports = () => {
  return {    
    mode: 'none',
    devtool: false,
    plugins: [
      // Каждый плагин - это конструктор
      new HtmlWebpackPlugin({
        template: './static/'
      })
    ]
  };
};