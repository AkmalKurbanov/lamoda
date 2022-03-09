const gulp = require('gulp');
const ttf2woff = require('gulp-ttf2woff'); // преобразует шрифт ttf в woff
const ttf2woff2 = require('gulp-ttf2woff2'); // преобразует шрифт ttf в woff2
const fonter = require('gulp-fonter'); // преобразует шрифт otf в ttf


module.exports = function fonts() {
  return gulp.src('./src/assets/fonts/**/*.ttf')
    .pipe(ttf2woff())
    .pipe(gulp.dest('./dist/assets/fonts/')),
    gulp.src('./src/assets/fonts/**/*.ttf')
    .pipe(ttf2woff2())
    .pipe(gulp.dest('./dist/assets/fonts/')),
    gulp.src('./src/assets/fonts/**/*.otf')
    .pipe(fonter({
      formats: ['ttf']
    }));
};

// gulp.task('otf2ttf', function () {
//   return
//     .pipe(gulp.dest('./src/assets/fonts/'));
// });