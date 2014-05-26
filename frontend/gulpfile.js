var gulp         = require('gulp')
  , connect      = require('gulp-connect')
  , sass         = require('gulp-sass')
  , autoprefixer = require('gulp-autoprefixer')
  , jshint       = require('gulp-jshint')
  , minifyHTML   = require('gulp-minify-html')
  , minifyCSS    = require('gulp-minify-css')
  , minifyIMG    = require('gulp-imagemin')
  , minifyJS     = require('gulp-uglify')
  , browserify   = require('gulp-browserify')
  , changed      = require('gulp-changed')
  , rename       = require('gulp-rename')
  , concat       = require('gulp-concat')
  , clean        = require('gulp-clean');

var PATHS = {
  input: {
    root:    'app',
    views:   'app/views/**/*',
    images:  'app/images/**/*',
    scripts: 'app/scripts/**/*',
    styles:  'app/styles/**/*',
    bower:   'bower_components/**/*'
  },
  output: {
    root:    'build',
    views:   'build/views',
    images:  'build/images',
    scripts: 'build/scripts',
    styles:  'build/styles',
    bower:   'build/bower_components'
  }
};

gulp.task('views', function () {
  gulp
    .src(PATHS.input.views)
    .pipe(changed(PATHS.output.views))
    .pipe(minifyHTML())
    .pipe(gulp.dest(PATHS.output.views))
    .pipe(connect.reload());
});

gulp.task('images', function() {
  gulp
    .src(PATHS.input.images)
    .pipe(changed(PATHS.output.images))
    //.pipe(minifyIMG())
    .pipe(gulp.dest(PATHS.output.images))
    .pipe(connect.reload());
});

gulp.task('scripts', function() {
  gulp
    .src('app/scripts/application.js')
    .pipe(changed('build/scripts'))
    .pipe(browserify())
    .pipe(minifyJS())
    .pipe(rename('application.min.js'))
    .pipe(gulp.dest('build/scripts'))
    .pipe(connect.reload());
});

gulp.task('styles', function() {
  gulp
    .src('app/styles/**/*')
    .pipe(changed('build/styles'))
    .pipe(sass({ style: 'expanded', 'errLogToConsole': true }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 9', 'ios 6', 'android 4'))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('build/styles'))
    .pipe(connect.reload());
});

gulp.task('lint', function() {
  gulp
    .src(PATHS.input.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('watch', function() {
  gulp.watch([PATHS.input.views], ['views']);
  gulp.watch([PATHS.input.images], ['images']);
  gulp.watch([PATHS.input.scripts], ['scripts']);
  gulp.watch([PATHS.input.styles], ['styles']);
});

gulp.task('clean', function() {
  gulp
    .src(PATHS.output.root)
    .pipe(clean());
});

gulp.task('server', function() {
  connect.server({
    root: ['build'],
    port: 8080,
    livereload: true
  });
});

gulp.task('default', [
  'views', 'images', 'scripts', 'styles', 'watch', 'server'
]);
