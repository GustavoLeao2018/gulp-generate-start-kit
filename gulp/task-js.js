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