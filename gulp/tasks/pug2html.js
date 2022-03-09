const gulp = require('gulp');
const plumber = require('gulp-plumber'); // Предотвращает разрыв канала из-за ошибок плагинов gulp
const pug = require('gulp-pug'); // компилирует шаблоны Pug
const webphtml = require('gulp-webp-html'); // заменяет <img /> на <picture /> поддерживает webp
let Fs = require('fs');
let dataFromFile = JSON.parse(Fs.readFileSync('./src/assets/data.json'));
const browsersync = require('browser-sync'); // живая перезагрузка страницы
module.exports = function pug2html() {
  return gulp.src(['./src/**/*.pug'])

    // Сообщение об ошибке
    .pipe(plumber())
    // Сообщение об ошибке

    // компилирует шаблоны Pug
    .pipe(pug({
      doctype: 'html',
      pretty: true,
      locals: dataFromFile || {}
    }))
    // компилирует шаблоны Pug

    // заменяет <img /> на <picture /> поддерживает webp
    // .pipe(webphtml())
    // заменяет <img /> на <picture /> поддерживает webp

    .pipe(gulp.dest('dist'))
    .pipe(browsersync.reload({
      stream: true
    }))
};