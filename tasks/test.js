'use strict';
var mocha = require('gulp-mocha');
var eslint = require('gulp-eslint');
var debug = require('gulp-debug');

module.exports = function (gulp, opts) {
    gulp.task('mocha', ['lint', 'compile' ], function () {
        return gulp.src(['_test/**/*.test.js'])
            .pipe(mocha({
                reporter: 'spec',
                require: [ './_test/helper.js' ]
            }));
    });

    gulp.task('lint', function () {
        return gulp.src(['test/**/*.js', 'src/**/*.js'])
            .pipe(debug({title: 'eslint'}))
            .pipe(eslint())
            .pipe(eslint.format())
            .pipe(eslint.failOnError());
    })
};