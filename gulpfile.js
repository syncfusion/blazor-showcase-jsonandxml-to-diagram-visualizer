var gulp = require("gulp");
require("@syncfusion/ej2-staging");
const fs = require('fs');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

// Minify JS files in wwwroot/js/
gulp.task('minify-js', function () {
    return gulp.src(
        ['Common/wwwroot/**/*.js', '!**/*.min.js'],
        { base: './' }
    )
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./'));
});


// CSS Minify Task
gulp.task('minify-css', function () {
    return gulp.src(
        ['Common/wwwroot/**/*.css', '!Common/wwwroot/**/*.min.css'],
        { base: './' }
    )
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./'));
});
