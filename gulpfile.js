var gulp = require('gulp')
  , less = require('gulp-less');

gulp.task('default', function() {
  gulp.src('./less/style.less')
    .pipe(less())
    .pipe(gulp.dest('./css'))
});
