const gulp = require('gulp');
const clean = require('gulp-clean'); // удаляет файлы и папки
const webpcss = require('gulp-webpcss'); // преобразует картинки в webp формат в стилях
// const webphtml = require('gulp-webp-html'); // заменяет <img /> на <picture /> поддерживает webp
// при сборке преобразует картинки в webp формат в стилях
module.exports = function webpStyle() {
  return gulp.src(['dist/assets/**/*.css'])
    .pipe(webpcss({}))
    .pipe(gulp.dest('dist/assets')),
    gulp.src(['dist/includes/'])
    .pipe(clean()),
    gulp.src(['dist/layout/'])
    .pipe(clean())
};
// при сборке преобразует картинки в webp формат в стилях