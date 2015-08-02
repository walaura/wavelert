var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('default', function() {
    browserify({
	    entries: './wavelert/dist/_es5export.js',
	    debug: true
    })
    .transform(babelify)
    .bundle()
    .pipe(source('wavelert.min.js'))
    .pipe(gulp.dest('./dist'));
});
