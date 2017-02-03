var gulp = require('gulp');
var webserver = require('gulp-webserver');
 
gulp.task('default', function() {
  gulp.src('app/index.html')
    .pipe(webserver({
      livereload: true,
      https: true
    }));
});