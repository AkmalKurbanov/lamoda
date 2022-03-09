const gulp = require('gulp');
const browsersync = require('browser-sync'); // живая перезагрузка страницы
module.exports = function browserSync() {
   browsersync({
      server: {
         baseDir: 'dist'
      },
   })
};