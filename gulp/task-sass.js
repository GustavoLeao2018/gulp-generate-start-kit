var diretorios   = require('./task-diretorios').module;
var importacoes  = require('./task-importacoes').module;

// Compilar o sass
exports.module = importacoes.gulp.task('sass', () => {
    /*
        retorna o resultado de:
            pega o diretório

                compila o sass e mostra o erro caso ocorra
    */
    return importacoes.gulp.src(diretorios.scssin)
               .pipe(importacoes.sourcemaps.init())
               .pipe(importacoes.sass().on('error', importacoes.sass.logError)) 
               .pipe(importacoes.autoprefixer({browsers: ['last 3 version']}))
               .pipe(importacoes.sourcemaps.write())
               .pipe(importacoes.gulp.dest(diretorios.scssout));
});