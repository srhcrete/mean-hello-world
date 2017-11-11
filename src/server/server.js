"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import the node modules express and path
//<reference path="../../typings/tsd.d.ts"/>
var express = require("express");
var path = require("path");
var port = process.env.PORT || 3000;
var app = express();
app.set('views', './src/Client/Views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFiles);
app.use('/node_modules', express.static(path.resolve(_dirname, '../../node_modules')));
app.use('/app', express.static(path.resolve(_dirname, '../Client/app')));
app.use('/*.html', function (req, res) {
    res.render(req.params[0]);
});
