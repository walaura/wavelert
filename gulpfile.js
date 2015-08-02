var gulp       = require('gulp'),
    babelify   = require('babelify'),
    browserify = require('browserify'),
    source     = require('vinyl-source-stream');

gulp.task('minify', function(){
    browserify({
	    entries: 'wavelert/dist/_es5export.js',
	    debug: true
    })
    .transform(babelify)
    .bundle()
    .pipe(source('wavelert.min.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch',function(){
    var watcher = gulp.watch('wavelert/**/*.js',['minify']);
	watcher.on('change', function(event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});
});
gulp.task('default', ['minify','watch']);