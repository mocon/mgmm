var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    Sequelize = require('sequelize'),
    epilogue = require('epilogue'),
    http = require('http'),
    server;

var database = new Sequelize('hackathon_mgmm', 'root', 'root', { // schema, username, password
    host: "localhost",
    port: 8889
});

// Define models

