'use strict';
var mocha = require('gulp-mocha');

module.exports = function (gulp, opts) {
    gulp.task('mocha', ['compile'], function () {
        return gulp.src(['_test/**/*.test.js'])
            .pipe(mocha({
                reporter: 'spec',
                require: ['./_test/helper.js' ]
            }));
    });
};