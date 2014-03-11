var gulp = require('gulp');
var stylus = require('gulp-stylus');
var exec = require('gulp-exec');

gulp.task('stylus', function () {

    gulp.src('./www/styles/source/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./www/styles'));
});

gulp.task('run', function () {

    gulp.src('.')
        .pipe(exec('./node_modules/.bin/nodewebkit <%= file.path %>'));
});

gulp.task('default', ['stylus', 'run']);
