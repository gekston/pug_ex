'use strict';

var gulp = require('gulp'),
    pug = require('gulp-pug');

gulp.task('views', function buildHTML() {
    return gulp.src('views/*.pug')
    .pipe(pug({
        // Your options in here. 
    }))
    .pipe(gulp.dest('app'));
});