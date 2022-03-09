const gulp = require('gulp');
const imagemin = require('gulp-imagemin'); // сжимает картинки
// const webp = require('gulp-webp'); // конвертируйте изображения в WebP

module.exports = function imageMinify() {
  return gulp.src('./src/assets/img/**/*')

    // конвертируйте изображения в WebP
    // .pipe(webp({
    //   quality: 70
    // }))
    // конвертируйте изображения в WebP

    .pipe(gulp.dest('./dist/assets/img')),
    gulp.src('./src/assets/img/**/*')

    // сжимает картинки
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      optimizationLevel: 3,
      svgoPlugins: [{
        removeViewBox: false
      }]
    }))
    // сжимает картинки

    .pipe(gulp.dest('./dist/assets/img'));
};