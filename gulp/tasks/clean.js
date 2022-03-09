const gulp = require('gulp');
const clean = require('gulp-clean'); // удаляет файлы и папки
module.exports = function cleanDist() {
  return gulp.src('dist', {
      read: false
    })
    .pipe(clean());
};