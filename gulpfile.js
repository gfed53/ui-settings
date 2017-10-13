var gulp = require('gulp');

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var paths = {
	sass: './sass/styles.sass',
	allSass: './sass/**/*.sass',
	css: './css'
};

// Compile SASS

gulp.task('sass', function(){
	return gulp.src(paths.sass)
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer())
	.pipe(gulp.dest(paths.css));
});

// Watch
gulp.task('watch', function(){
	gulp.watch(paths.allSass, ['sass']);
});

//Default
gulp.task('default', ['sass', 'watch']);