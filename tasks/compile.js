'use strict';
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');

module.exports = function (gulp, opts) {
    gulp.task('compile-src', ['clean'], function () {
        return gulp.src(['src/**/*.js'])
            .pipe(sourcemaps.init())
            .pipe(babel())
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('dist'));
    });

    gulp.task('compile-test', ['compile-src'], function () {
        return gulp.src(['test/**/*.js'])
            .pipe(sourcemaps.init())
            .pipe(babel())
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('_test'));
    });

    gulp.task('compile', ['compile-src', 'compile-test']);
};