const gulp = require('gulp');
module.exports = function assets() {
  return gulp.src('./src/assets/**/*.*')
    .pipe(gulp.dest('./dist/assets/'));
};