var express = require('express');
var app = express();

var request = require('request');
var gulp = require('gulp');

module.exports = function(config) {
    var server;

    gulp.task('server',[], function(cb) {
        var app = express();
        app.use(express.static(__dirname.split('gulp/task')[0]));

        app.use('/v1*', function (req, res) {
          req.pipe(request('http://api.buyingiq.com/' + req.originalUrl, function (e) {
            if (e) {
              error(res, e);
            }
          })).pipe(res);
        });


        app.get('/', function(req, res) {
            res.sendFile(__dirname.split('gulp/task')[0] + 'index.html');
        });

        server = app.listen(3000)
            .on('error', function(err) {
                if (err.code === 'EADDRINUSE') {
                    console.log('Already in use');
                }
                cb();
            })
            .on('listening', function() {
                console.log('listening', server.address().port);
                cb();
            });

    });
};