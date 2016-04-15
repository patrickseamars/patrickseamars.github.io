var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('default', function(){
	console.log('Hello World');
});

gulp.task('sass', function() {
	return gulp.src('styles/scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('styles/css'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('watch', ['browserSync', 'sass'], function(){
	gulp.watch('styles/scss/*.scss', ['sass']);
	gulp.watch('*.html', browserSync.reload);
	gulp.watch('app/*/*.js', browserSync.reload);
});

gulp.task('browserSync', function(){
	browserSync.init({
		server: { 
		// I really don't want this to be a local path
		//TODO: Find out how to make it better
			baseDir: '/home/patrick/code/patrickseamars.github.io'
		}
	})
})

//TODO: Optimizing?
// https://css-tricks.com/gulp-for-beginners/




