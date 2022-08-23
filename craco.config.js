// const path = require('path');
// const webpack = require('webpack');

module.exports = {
   webpack: {
     target: 'electron-renderer',
   },
   jest: {
     configure: {
       moduleNameMapper: {
         '^@(.*)$': '<rootDir>/src$1'
       }
     }
   }
 };