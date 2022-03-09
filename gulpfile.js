const gulp = require('gulp');
const styles = require('./gulp/tasks/styles');
const script = require('./gulp/tasks/script');
const pug2html = require('./gulp/tasks/pug2html');
const fonts = require('./gulp/tasks/fonts');
const imageMinify = require('./gulp/tasks/imageMinify');
const browserSync = require('./gulp/tasks/browser-sync');
const purify = require('./gulp/tasks/purify');
const webpStyle = require('./gulp/tasks/webpStyle');
const clean = require('./gulp/tasks/clean');
const assets = require('./gulp/tasks/assets');



gulp.task('watch', function () {
   var restart = require('gulp-restart');
   gulp.watch(['src/assets/**/*.json'], restart);
   gulp.watch('src/**/*.pug', gulp.parallel(pug2html));
   gulp.watch('src/scss/**/*.scss', gulp.parallel(styles));
   gulp.watch('src/assets/**/*.*', gulp.parallel(assets));
   gulp.watch('src/assets/img/**/*', gulp.parallel(imageMinify));
   gulp.watch('src/js/**/*.js', gulp.parallel(script));
   gulp.watch('dist/assets/**/*.html', gulp.parallel(purify));
});


gulp.task('build', gulp.series(clean, pug2html, styles, script, fonts, imageMinify, webpStyle, assets, purify));

gulp.task('default', gulp.parallel('watch', pug2html, styles, script, browserSync, assets));