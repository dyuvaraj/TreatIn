
var gulp = require('gulp');
var gulpJade = require('gulp-jade');
var jade = require('jade');
var watch = require('gulp-watch');
var gutil = require('gulp-util');
var sass = require('gulp-sass');

gulp.task('default', ['watch']);

// run this task by typing in gulp jade in CLI
gulp.task('jade', function () {
  return gulp.src(['../jade/index.jade', '../jade/result.jade', '../jade/components.jade', '../jade/hospitalDescription.jade'])
    .pipe(gulpJade({jade: jade, pretty: true })) // pip to jade plugin
    .on('error', gutil.log)
    .pipe(gulp.dest('../')); // tell gulp our output folder
});
/*
 gulp.task('sass', function () {
 gulp.src('../sass/style.sass')
   .pipe(sass({outputStyle: 'expanded'}))
   .pipe(gulp.dest('../css'));
});
*/
gulp.task('watch', function () {
   gulp.watch(['../jade/*.jade'], ['jade']);
   //gulp.watch('../sass/*.sass', ['sass']);
});
