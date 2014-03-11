var gulp = require('gulp');
var stylus = require('gulp-stylus');
var exec = require('gulp-exec');
var clean = require('gulp-clean');

gulp.task('stylus', function () {

    gulp.src('./www/styles/source/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./www/styles'));
});

gulp.task('run', function () {

    gulp.src('.')
        .pipe(exec('./node_modules/.bin/nodewebkit <%= file.path %>'));
});

gulp.task('clean', function() {
    gulp.src('./www/styles/*.css', { read: false })
        .pipe(clean({ force: true }));
});

gulp.task('default', ['stylus', 'run']);
