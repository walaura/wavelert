var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('default', function() {
    browserify({
	    entries: './wavelert.js',
	    debug: true
    })
    .transform(babelify)
    .bundle()
    .pipe(source('wavelert.js'))
    .pipe(gulp.dest('./dist'));
});
