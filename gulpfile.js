//working variables
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync  = require('browser-sync').create();

//compile scss into class
function style(){
    //where is the scss file, ignores _xxx.scss files
    return gulp.src('./scss/**/*.scss')
    //pass through sass compiler
    .pipe(sass())
    //where to sae compiled csss
    .pipe(gulp.dest('./css'))
    //stream change to all browsers
    .pipe(browserSync.stream())
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
