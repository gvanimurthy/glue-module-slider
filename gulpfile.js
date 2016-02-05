'use strict';
var gulp = require('gulp'),
    addsrc = require('gulp-add-src'),
    plumber = require('gulp-plumber'),
    debug = require('gulp-debug'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cache = require('gulp-cache'),
    del = require('del'),
    supportedBrowser = ['last 2 versions','ie 7', 'ie 8', 'ie 9','ie 10', 'ie 11', 'android 2.3', 'android 4', 'opera 12'];

var basepath = {
    src: 'src/',
    build: 'htdocs/',
    test : 'test/'
};
var src = {
    assets: basepath.src+'assets/',
    images: basepath.src+'assets/images/',
    js: basepath.src+'assets/js/',
    sass: basepath.src+'assets/sass/'
};
var build = {
    assets: basepath.build+'assets/',
    images: basepath.build+'assets/images/',
    js: basepath.build+'assets/js/',
    css: basepath.build+'assets/css/'
};
var libScripts = [
        'node_modules/jquery/dist/jquery.min.js',
        'src/assets/js/lib/jquery.debug.js',
        'src/assets/js/lib/jquery.got-style.js',
        'src/assets/js/lib/jquery.compact.js',
        'src/assets/js/lib/jquery.compact.slider.js',
        'src/assets/js/lib/jquery.compact.slideshow.js',
        'src/assets/js/lib/jquery.compact.init.js',
        'src/assets/js/lib/jquery.aria.js'
    ];


/*=====================================================================
 JS TASKS
 ======================================================================*/
gulp.task('js',function(){
   gulp.src(libScripts)
       //.pipe(addsrc.append(src.js+'/lib/*.js'))
       .pipe(addsrc.append(src.js+'/custom/*.js'))
       .pipe(sourcemaps.init())
       .pipe(plumber())
       .pipe(debug({
           title: 'js'
       }))
       .pipe(concat('slider.js',{
           newLine: ''
       }))
       .pipe(sourcemaps.write('.', {
           sourceRoot: src.js
       }))
       .pipe(gulp.dest(build.js))
       .pipe(reload({
           stream: true
       }));
});
/*=====================================================================
 CSS TASKS
 ======================================================================*/
gulp.task('sass',function(){
    gulp.src(src.sass+'all.scss')
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(concat('slider.css'))
        .pipe(sass({
            includePaths: [src.sass]
        })).on('error',sass.logError)
        .pipe(autoprefixer({
            browsers: supportedBrowser,
            cascade: false
        }))
        .pipe(sourcemaps.write('.', {
            sourceRoot: src.sass
        }))
        .pipe(gulp.dest(build.css))
        .pipe(reload({
            stream: true
        }));
})
/*=====================================================================
 =           MOVE FOLDERS         =
 ======================================================================*/
gulp.task('html', function(){
    gulp.src(basepath.src+'*.html')
        .pipe(gulp.dest(basepath.build));

});
gulp.task('images', function(){
    return gulp.src(src.images+'*')
        .pipe(gulp.dest(build.images));
});

/*=====================================================================
 CLEAN TASKS
 ======================================================================*/
gulp.task('clear',function(done){
    return cache.clearAll(done);
});
gulp.task('clean', function(cb){
    del([basepath.build], cb);
});
/*=====================================================================
 WATCH TASK
 ======================================================================*/
gulp.task('watcher',function(){
    browserSync({
        server: basepath.build,
        index: "/index.html"
    });
    gulp.watch(src.js+'*.js',['js']);
    gulp.watch(src.sass+'*.scss',['sass']);
    gulp.watch(src.images+'*',['images']);
    gulp.watch(basepath.src+'*.html',['html']);
});
/*=====================================================================
 TASK RUNNERS
 ======================================================================*/
gulp.task('default',['js','sass','html','images']);
gulp.task('watch',['watcher']);
gulp.task('develop',['default','watch'])