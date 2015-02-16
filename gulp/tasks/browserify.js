'use strict';

var config = require('../config');
var gulp = require('gulp');
var to5 = require('6to5ify');
var shim = require('browserify-shim');
var gulpif = require('gulp-if');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var streamify = require('gulp-streamify');
var watchify = require('watchify');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var handleErrors = require('../util/handleErrors');
var browserSync = require('browser-sync');
var partialify = require('partialify');

// Based on: http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/
function buildScript(file) {

    var bundler = browserify({
        entries: config.browserify.entries,
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    }, watchify.args);

    if (!global.isProd) {
        bundler = watchify(bundler);
        bundler.on('update', function() {
            rebundle();
        });
    }

    bundler.transform(to5);
    bundler.transform(shim);
    bundler.transform(partialify);

    function rebundle() {
        var stream = bundler.bundle();
        var createSourcemap = global.isProd && config.browserify.sourcemap;

        gutil.log('Rebundle...');

        return stream.on('error', handleErrors)
            .pipe(source(file))
            .pipe(gulpif(createSourcemap, buffer()))
            .pipe(gulpif(createSourcemap, sourcemaps.init()))
            .pipe(gulpif(global.isProd, streamify(uglify({
                compress: {
                    drop_console: true
                }
            }))))
            .pipe(gulpif(createSourcemap, sourcemaps.write('./')))
            .pipe(gulp.dest(config.scripts.dest))
            .pipe(browserSync.reload({
                stream: true,
                once: true
            }));
    }

    return rebundle();

}

gulp.task('browserify', function() {

    return buildScript('app.js');

});
