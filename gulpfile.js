/*============[Importando os pacotes]==========
Pugins do gulp */
var gulp         = require('gulp');                     // gulp
var sass         = require('gulp-sass');                // sass
var sourcemaps   = require('gulp-sourcemaps');          // sourcemaps
var autoprefixer = require('gulp-autoprefixer');        // autoprefixer
var cleanCss     = require('gulp-clean-css');           // cleanCss
var uglify       = require('gulp-uglify');              // uglify
var concat       = require('gulp-concat');              // concat
var imagemin     = require('gulp-imagemin');            // imagemin
var changed      = require('gulp-changed');             // changed
var htmlReplace  = require('gulp-html-replace');        // htmlReplace 
var htmlMin      = require('gulp-htmlmin');             // htmlMin
// Plugins do node
var del          = require('del');                      // del
var browserSync  = require('browser-sync');             // browserSync
var runSequence  = require('run-sequence');             // runSequence
var es           = require('event-stream');             // es
var pipeline     = require('readable-stream').pipeline; // pepeline


//============[Array de diretorios]=============
var diratorio  = require('./gulp/task-diretorios'); 

//=============[Criando tarefas]=============
var taskSass    = require('./gulp/task-sass');
var taskBrowser = require('./gulp/task-browser');
var taskJs      = require('./gulp/task-js');
var taskHtml    = require('./gulp/task-html');
var taskImg     = require('./gulp/task-img');
var taskBuild   = require('./gulp/task-build');
var taskDefault = require('./gulp/task-default');



