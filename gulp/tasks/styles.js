const gulp = require('gulp');
const plumber = require('gulp-plumber'); // Предотвращает разрыв канала из-за ошибок плагинов gulp
const sass = require('gulp-sass'); // компиляция sass файлов 
const rename = require('gulp-rename'); // добавляет префикс min сжатому файлу
const autoprefixer = require('gulp-autoprefixer'); // добавляет префиксы -webkit-: -moz-: -ms-:
const cssmin = require('gulp-clean-css'); // минифицирует сss файлы
const sourcemaps = require('gulp-sourcemaps'); // создает карты источника идентификации для файла
// const webpcss = require('gulp-webpcss'); // преобразует картинки в webp формат в стилях
const browsersync = require('browser-sync'); // живая перезагрузка страницы


module.exports = function styles() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    // Сообщение об ошибке
    .pipe(plumber({
      errorHandler: function (err) {
        console.log(err);
        this.emit('end')
      }
      // Сообщение об ошибке
    }))

    // компиляция sass файлов 
    .pipe(sass({
      outputStyle: 'expand'
    }))
    // компиляция sass файлов 

    // добавляет префиксы -webkit-: -moz-: -ms-:
    .pipe(autoprefixer({
      browsers: ['last 5 versions'],
    }))
    // добавляет префиксы -webkit-: -moz-: -ms-:

    // минифицирует сss файлы
    .pipe(cssmin())
    // минифицирует сss файлы

    // добавляет префикс min сжатому файлу
    .pipe(rename({
      suffix: '.min',
      prefix: ''
    }))
    // добавляет префикс min сжатому файлу

    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/assets'))
    .pipe(browsersync.reload({
      stream: true
    }))
};