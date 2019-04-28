var diretorios   = require('./task-diretorios').module;
var importacoes  = require('./task-importacoes').module;

// Tarefa de js
exports.module = importacoes.gulp.task('js', () => {
    /*
        retorna o resultado de:
            pega o diretório
                concatena os arquivos
                minifica os arquivos
                manda pra pasta de destino
    */
    return importacoes.es.merge([
            importacoes.gulp.src('node_modules/jquery/dist/jquery.min.js'),
            importacoes.gulp.src('node_modules/popper.js/dist/popper.min.js'),
            importacoes.gulp.src('node_modules/bootstrap/dist/js/bootstrap.min.js'),
            importacoes.gulp.src(diretorios.jsin)
        ])             
        .pipe(importacoes.concat(diretorios.jsoutname))   
        .pipe(importacoes.gulp.dest(diretorios.jsoutsrc))   
        .pipe(importacoes.gulp.dest(diretorios.jsout));
});