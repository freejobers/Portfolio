var gulp = require('gulp');
var sass = require('gulp-sass');
var less = require('gulp-less');
var path = require('path');
 
gulp.task('less', function () {
  return gulp.src('./css/less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass', function () {
  return gulp.src('./css/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./css/sass/**/*.scss', gulp.parallel('sass'));
});
gulp.task('less:watch', function () {
  gulp.watch('./css/less/**/*.less', gulp.parallel('less'));
});