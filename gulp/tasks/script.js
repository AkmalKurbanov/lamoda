const gulp = require('gulp');
const rename = require('gulp-rename'); // добавляет префикс min сжатому файлу
const concat = require('gulp-concat'); // конкатенирует файлы
const uglify = require('gulp-uglify'); // минифицирует js файлы
const plumber = require('gulp-plumber'); // Предотвращает разрыв канала из-за ошибок плагинов gulp
const sourcemaps = require('gulp-sourcemaps'); // создает карты источника идентификации для файла
const babel = require('gulp-babel');
const browsersync = require('browser-sync'); // живая перезагрузка страницы

module.exports = function script() {


  // подключение библиотек
  return gulp.src([
      'node_modules/jquery/dist/jquery.js',
      'src/js/scripts/*.js'
    ])
    // подключение библиотек

    .pipe(sourcemaps.init())

    // Сообщение об ошибке
    .pipe(plumber({
      errorHandler: function (err) {
        console.log(err);
        this.emit('end')
      }
    }))
    // Сообщение об ошибке

    // конкатенация файлы
    .pipe(concat('scripts.min.js'))
    // конкатенирует файлы

    .pipe(babel({
      presets: [
        ['env', {
          loose: true,
          modules: false,
          exclude: ['transform-es2015-typeof-symbol']
        }]
      ],
      plugins: ['transform-object-rest-spread']
    }))

    // минифицирует js файлы
    .pipe(uglify())
    // минифицирует js файлы

    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/assets'))
    .pipe(browsersync.reload({
      stream: true
    }))
};