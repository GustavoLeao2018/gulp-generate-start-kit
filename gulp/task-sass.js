var diretorios   = require('./task-diretorios');

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