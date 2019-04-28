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
 
//============[Arrya de diretorios]=============
var diretorios = {
    src: 'src/',

    htmlin: 'src/*.html',
    htmlviewin: 'src/view/**/*.html',
    
    scssin: 'src/sass/**/*.scss',
    scssout: 'src/css/',
    
    jsin: 'src/js/**/*.js',
    jsreplaceout: 'js/script.min.js',
    jsreplaceoutview: '../js/script.min.js',
    jsoutname: 'script.min.js',
    jsoutsrc: 'src/js/',
    jsout: 'dist/js/',
    
    cssin: 'src/css/**/*.css',
    cssoutname: 'style.min.css',
    cssoutsrc: 'src/css',
    cssout: 'dist/css',
    cssreplaceout: 'css/style.min.css',
    cssreplaceoutview: '../css/style.min.css',

    dist: 'dist/',
    distview: 'dist/view/',

    imgin: 'src/img/**/*.{jpg,jpeg,png,gif}',
    imgout: 'dist/img/',
    imgoutsrc: 'src/img/'
    
};


//=============[Criando tarefas]=============
// Tarefa de recarregar 
gulp.task('recarregar', () => {
    browserSync.reload();
});

// Compilar o sass
gulp.task('sass', () => {
    /*
        retorna o resultado de:
            pega o diretório

                compila o sass e mostra o erro caso ocorra
    */
    return gulp.src(diretorios.scssin)
               .pipe(sourcemaps.init())
               .pipe(sass().on('error', sass.logError)) 
               .pipe(autoprefixer({browsers: ['last 3 version']}))
               .pipe(sourcemaps.write())
               .pipe(gulp.dest(diretorios.scssout));
});

// Tarefa de servidor
gulp.task('servidor', ['sass'], () => {
    // Roda no navegador pegando os arquivos na pasta src
    browserSync({server: diretorios.src}); 

    // Fica esperando e chamando as funções necessárias 
    gulp.watch([diretorios.htmlin, diretorios.jsin], ['recarregar']); // Regarrega o browser
    gulp.watch(diretorios.scssin, ['sass']); // Compila os arquivos sass
});

// Tarefa de js
gulp.task('js', () => {
    /*
        retorna o resultado de:
            pega o diretório
                concatena os arquivos
                minifica os arquivos
                manda pra pasta de destino
    */
    return es.merge([
            gulp.src('node_modules/jquery/dist/jquery.min.js'),
            gulp.src('node_modules/popper.js/dist/popper.min.js'),
            gulp.src('node_modules/bootstrap/dist/js/bootstrap.min.js'),
            gulp.src(diretorios.jsin)
        ])             
        .pipe(concat(diretorios.jsoutname))   
        .pipe(gulp.dest(diretorios.jsoutsrc))   
        .pipe(gulp.dest(diretorios.jsout));
});

// Tarefa de css
gulp.task('css', ['sass'], () => {
    return  es.merge([    
                    gulp.src([
                        'node_modules/bootstrap/dist/css/bootstrap-reboot.min.css',
                        'node_modules/bootstrap/dist/css/bootstrap-grid.min.css',
                        'node_modules/bootstrap/dist/css/bootstrap.min.css'    
                    ]),
                    gulp.src(diretorios.cssin).pipe(cleanCss())
              ])
              .pipe(concat(diretorios.cssoutname))
              .pipe(gulp.dest(diretorios.cssoutsrc))
              .pipe(gulp.dest(diretorios.cssout));
});

// Tarefa html
gulp.task('html', ['js', 'css'], () => {
    return es.merge([
            gulp.src(diretorios.htmlin)
                .pipe(htmlReplace({
                    'css': diretorios.cssreplaceout,
                    'js': diretorios.jsreplaceout
                }))
                .pipe(gulp.dest(diretorios.dist)),
            gulp.src(diretorios.htmlviewin)
               .pipe(htmlReplace({
                    'css': diretorios.cssreplaceoutview,
                    'js': diretorios.jsreplaceoutview
               }))
               .pipe(gulp.dest(diretorios.distview))
            ])
            .pipe(htmlMin({
                sortAttributes: true,
                sortClassName: true,
                collapseWhitespace: true
            }));
});

// Tarefa img
gulp.task('img', () => {
    return gulp.src(diretorios.imgin)
               .pipe(changed(diretorios.imgout))
               .pipe(imagemin())
               .pipe(gulp.dest(diretorios.imgoutsrc))
               .pipe(gulp.dest(diretorios.imgout));
});

// Tarefa de limpar dist
gulp.task('limpar', () => {
    return del([diretorios.dist]);
});

// Tarefa build
gulp.task('build', () => {
    runSequence('limpar', ['js', 'css', 'html', 'img']);
});

// Tarefa Base(default)
gulp.task('default', ['servidor']);