const gulp = require('gulp');
const purify = require('gulp-purifycss'); // удаляет ненужные css
module.exports = function purifyClean() {
  return gulp.src('dist/assets/**/*.css')
    .pipe(purify(['dist/**/*.js', 'dist/**/*.html']))
    .pipe(gulp.dest('./dist/assets/'));
};