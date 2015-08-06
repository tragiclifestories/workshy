var del = require('del');
module.exports = function (gulp, opts) {
    gulp.task('clean', function (cb) {
        del(['dist/**/*.*', '_test/**/*.*'], cb);
    });
};