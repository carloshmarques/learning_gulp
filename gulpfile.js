'use strict';
// List dependencies here

const { series } = require('gulp');
const gulp = require('gulp');
const browserify = require('gulp-browserify');
const uglify = require('gulp-uglify');
const gulpif = require('gulp-if');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');


/*
* Add your variables here
*
*/


var outputDir = "./";
var inputDir = "./build/";
/*
 * by default gulp task are set to a development mode as seen on the line var env = process.env.NODE_ENV || 'development';
 * to run tasks in a production mode, type in terminal NODE_ENV=production and task ex: NODE_ENV= production gulp js
 *
 */
var env = process.env.NODE_ENV || 'development';

/// Create your functions here

/// javascript
function js(cb) {
  gulp
  .src(inputDir + 'js/main.js')
  .pipe(browserify({debug: env === 'development' }))
  .pipe(gulpif(env === 'production', uglify()))
  .pipe(gulp.dest(outputDir + '/js'));

   cb();      
};



/// CSS tasks here


function styles(cb) {
  
  var config = {};
  if (env === 'development') {
  config.sourceComments = 'map';
  }
  if (env === 'production') {
    config.outputStyle = 'compressed';
    }
     gulp
     .src(inputDir + 'sass/main.scss')
     .pipe(plumber())
     .pipe(sass(config))
     .pipe(gulp.dest(outputDir + 'css'))

  cb(); 
};


/// Watch tasks here
function watch(cb) {
  gulp.watch(inputDir + 'js/**/*.js', js);
  // gulp.watch(inputDir + 'sass/**/**/*.scss', ['sass']);
  //gulp.watch(inputDir + 'images/**/**/*.+(png|jpg|jpeg|gif|svg|ico)', ['images']);
  // gulp.watch(inputDir + 'fonts/**/**/*', ['fonts']);

  cb();
};

// exports here

exports.default = series(
  watch, styles
)
exports.js = js
exports.watch = watch
exports.styles= styles

/* default task
keep function defaultTask empty, add your tasks in the exports.default code block
ex: exports.default(
  watch, styles, & whatever tasks you want to be fired up by default
)
*/

 function defaultTask(cb) {   

   cb();
}
