'use strict';
var webpack = require('webpack'),
path = require('path');

var APP = __dirname + '/app';

module.exports = {
    context: APP,
     entry: {
           app: './app.js'
    },
    output: {
        path: APP,
        filename: 'bundle.js'
    }
}