var fs = require('fs');
var gulp = require('gulp');

var opts = {};

fs.readdirSync('tasks').forEach(function (path) {
    require('./tasks/' + path)(gulp, opts);
});

gulp.task('test', ['compile', 'mocha']);
