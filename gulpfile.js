var gulp = require('gulp');
var sass = require('gulp-sass');
var less = require('gulp-less');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
 
gulp.task('less', function () {
  return gulp.src('./css/less/**/*.less')
  	.pipe(sourcemaps.init())
    .pipe(less())
    .pipe(concat('css/style.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./'));
});

gulp.task('sass', function () {
  return gulp.src('./css/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./css/sass/**/*.scss', gulp.series('sass'));
});
gulp.task('less:watch', function () {
  gulp.watch('./css/less/**/*.less', gulp.series('less'));
});