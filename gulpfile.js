'use strict';
var gulp = require('gulp');
var chokidar = require('chokidar');
var notify = require('gulp-notify');
var phpunit = require('gulp-phpunit');

var watcher = chokidar.watch(['src/**/*.php', 'tests/*.php']);

watcher.on('change', function(){
    gulp.src('tests/*.php')
        .pipe(phpunit('vendor/bin/phpunit'))
        .on('error', notify.onError({
            title: "Gulp PHP Unit",
            message: "Error(s) occurred during testing..."
        }))
        .pipe(notify({
            title: "Gulp PHP Unit",
            message: 'Successfully ran test!'
        }));
});
