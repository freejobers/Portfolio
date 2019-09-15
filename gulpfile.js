"use strict"

const gulp = require('gulp');
const less = require('gulp-less');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require("browser-sync").create();
const notify = require('gulp-notify');
 
gulp.task('less', function () {
  return gulp.src('./css/less/style.less')
  	.pipe(sourcemaps.init())
    .pipe(less().on('error', notify.onError(function(err) {
    	return {
    		title: 'less',
    		message: err.message
    	};
    })))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('serve', gulp.series('less',  function(done) {

  browserSync.init({
    server: "./"  
  });

  gulp.watch(['css/less/**/*.less'], gulp.series('less'));
  gulp.watch("*.html").on('change', browserSync.reload);
  done();
}));
 
