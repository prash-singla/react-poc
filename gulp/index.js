var gulp = require('gulp');
var fs = require('fs');
var tasks = fs.readdirSync('./gulp/task/');

module.exports = function() {

    tasks.forEach(function(task) {
        require('./task/' + task)();
    });

    gulp.task('default',['server'], function(cb) {
        console.log('Task Completed');
        cb();
    });
};