const gulp = require('gulp');
const less = require('gulp-less');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const fileinclude = require('gulp-file-include');

function css(){
    return gulp.src('./test/src/style.spec.less')
    .pipe(less())
	.pipe(gcmq())
	// .pipe(cleanCSS())
    .pipe(gulp.dest('./test/dist'))
}

function readme() {
	return gulp.src('./doc/README.md')
	.pipe(fileinclude())
	.pipe(gulp.dest('./'));
}

function watch(){
    gulp.watch(['./test/src/style.spec.less'],css);
}

function watchReadme(){
    gulp.watch(['./doc/README.md'],readme);
}

module.exports.css = css;
module.exports.readme = readme;
module.exports.watchReadme = watchReadme;
module.exports.watch = watch;
