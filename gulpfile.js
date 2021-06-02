const gulp = require('gulp');
const less = require('gulp-less');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');

function css(){
    return gulp.src('./test/src/style.spec.less')
    .pipe(less())
	.pipe(gcmq())
	// .pipe(cleanCSS())
    .pipe(gulp.dest('./test/dist'))
}

function watch(){
    gulp.watch(['./test/src/style.spec.less'],css);
}

module.exports.css = css;
module.exports.watch = watch;
