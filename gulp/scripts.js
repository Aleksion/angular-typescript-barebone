'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

  var tsProject = $.typescript.createProject(path.join(process.cwd(), 'tsconfig.json'), {sortOutput: true});

  gulp.task('scripts', [ 'tsd:install','tsd:update_config'], function () {
  return  tsProject.src()
    .pipe($.sourcemaps.init())
    .pipe($.tslint())
    .pipe($.tslint.report('prose', { emitError: false }))
    .pipe($.typescript(tsProject)).on('error', conf.errorHandler('TypeScript'))  
    .pipe($.concat('app.module.js'))
    .pipe($.sourcemaps.write('../maps'))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app')))
    .pipe(browserSync.reload({ stream: true }))
    .pipe($.size())
});
